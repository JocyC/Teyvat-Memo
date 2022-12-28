import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";
import { CharacterCard } from "../../components";
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
    // if (!planType || !status) {
    //   toast.error("Please Fill Out All Fields");
    //   return;
    // }
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
          <div className="form-row">
            <label htmlFor="status" className="form-label">
              status
            </label>
            <select
              name="status"
              value={status}
              onChange={handleInput}
              className="form-select"
            >
              {statusOptions.map((value, index) => {
                return (
                  <option key={index} value={value}>
                    {value}
                  </option>
                );
              })}
            </select>
          </div>
          {/* plan type */}
          <div className="form-row">
            <label htmlFor="planType" className="form-label">
              plan type
            </label>
            <select
              name="planType"
              value={planType}
              onChange={handleInput}
              className="form-select"
            >
              {planTypeOptions.map((itemValue, index) => {
                return (
                  <option key={index} value={itemValue}>
                    {itemValue}
                  </option>
                );
              })}
            </select>
          </div>

          {/* if save: */}
          {planType === "save" && (
            <div className="form-row">
              <label htmlFor="constellation" className="form-label">
                constellation
              </label>
              <select
                name="constellation"
                value={constellation}
                onChange={handleInput}
                className="form-select"
              >
                {[0, 1, 2, 3, 4, 5, 6].map((value, index) => {
                  return (
                    <option key={index} value={value}>
                      {`C${value}`}
                    </option>
                  );
                })}
              </select>
            </div>
          )}
          {/* choose number of constallation, save to the saving plan section, output primo number and fate number */}

          {/* if farm: */}
          {planType === "farm" && (
            // ascend level from a to b
            <div className="form-row pair-select">
              <label htmlFor="ascendLevel" className="form-label pair-label">
                Ascend Level
              </label>
              <select
                name="ascendLow"
                value={ascendLow}
                onChange={handleInput}
                className="form-select pair-low"
              >
                {[...Array(91).keys()].map((value, index) => {
                  return (
                    <option key={index} value={value}>
                      {value}
                    </option>
                  );
                })}
              </select>
              <div className="pair-middle">—</div>
              <select
                name="ascendHigh"
                value={ascendHigh}
                onChange={handleInput}
                className="form-select pair-high"
              >
                {[...Array(91).keys()].map((value, index) => {
                  return (
                    <option key={index} value={value}>
                      {value}
                    </option>
                  );
                })}
              </select>
            </div>
          )}

          {/* input expected level, level of talent, save to the farming plan section, output the materials (no data on that sadly) */}
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
  .pair-select {
    display: grid;
    grid-template-areas:
      "a a a"
      "b c d";
  }
  .pair-label {
    grid-area: a;
  }
  .pair-low {
    grid-area: b;
  }
  .pair-middle {
    grid-area: c;
    text-align: center;
    align-self: center;
  }
  .pair-high {
    grid-area: d;
  }
  select {
    appearance: none;
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
