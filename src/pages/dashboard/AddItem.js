import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";
import { CharacterCard, FormRowSelect, FormPairSelect } from "../../components";
import {
  handleChange,
  clearValues,
  createPlan,
} from "../../features/item/itemSlice";

const AddItem = () => {
  const {
    isLoading,
    isEditing,
    editItemId,
    itemType,
    itemTypeOptions,
    planType,
    planTypeOptions,
    status,
    statusOptions,
    constellation,
    ascendLow,
    ascendHigh,
  } = useSelector((store) => store.item);
  const dispatch = useDispatch();
  const [selectedName, setSelectedName] = useState("");
  const [charaList, setCharaList] = useState([]);
  const fetchCharaList = async () => {
    try {
      const { data } = await axios("https://api.genshin.dev/characters");
      // remove traveler & - in names
      const list =
        data &&
        data
          .filter((item) => !item.includes("traveler"))
          .map((itemName) => {
            if (itemName.includes("traveler")) return;
            if (itemName.includes("-")) {
              return itemName.replace("-", "");
            }
            return itemName;
          });
      setCharaList(list);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCharaList();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedName) {
      toast.error("Who do you make this plan for?");
      return;
    }
    if (ascendLow >= ascendHigh) {
      toast.error("I thought we are ascending the level...");
      return;
    }
    createPlan({
      selectedName,
      planType,
      status,
      constellation,
      ascendLow,
      ascendHigh,
    });
  };
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };
  const clearInput = () => {
    dispatch(clearValues());
  };
  const childToParent = (selectedName) => {
    setSelectedName(selectedName);
  };
  return (
    <Wrapper>
      <div className="items-container">
        <div className="all-items">
          {charaList.map((name, index) => {
            return (
              <CharacterCard
                charaName={name}
                key={index}
                childToParent={childToParent}
              />
            );
          })}
        </div>
      </div>
      <form className="form">
        <h5>
          {isEditing ? `edit plan for` : `add plan for`}
          <span> {selectedName}</span>
        </h5>
        <div className="form-center">
          {/* status: ongoing/next/done */}
          <FormRowSelect
            name="status"
            value={status}
            handleChange={handleInput}
            selectOptions={statusOptions}
          />
          {/* plan type */}
          <FormRowSelect
            name="planType"
            value={planType}
            handleChange={handleInput}
            selectOptions={planTypeOptions}
            labelText="plan type"
          />
          {/* if save: */}
          {planType === "save" && (
            <FormRowSelect
              name={constellation}
              value={constellation}
              handleChange={handleInput}
              selectOptions={[0, 1, 2, 3, 4, 5, 6]}
              labelText="constellation number"
            />
          )}

          {/* if farm: */}
          {planType === "farm" && (
            // ascend level from a to b
            <FormPairSelect
              labelName="ascendLevel"
              labelText="ascend level"
              nameLow="ascendLow"
              nameHigh="ascendHigh"
              valueLow={ascendLow}
              valueHigh={ascendHigh}
              handleChange={handleInput}
              selectOptions={[...Array(91).keys()]}
            />
          )}
        </div>
        {/* btn container */}
        <div className="btn-container">
          <button
            type="button"
            className="btn btn-block clear-btn"
            onClick={clearInput}
          >
            clear
          </button>
          <button
            type="submit"
            className="btn btn-block submit-btn"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            submit
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    align-items: center;
    .items-container {
      max-width: 560px;
    }
  }
  span {
    color: var(--primary-200);
  }
  .items-container {
    background: var(--white);
    border-radius: var(--borderRadius);
    max-height: 640px;
    overflow: scroll;
    padding: 1rem;
  }
  .all-items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 0.5rem;
  }

  .btn-container {
    padding-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }
  .clear-btn {
    background: var(--grey-500);
  }
  .clear-btn:hover {
    background: var(--black);
  }
`;

export default AddItem;
