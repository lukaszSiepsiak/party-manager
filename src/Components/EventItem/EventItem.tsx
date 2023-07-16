import "./EventItem.css";

export type EventItemPropsType = {
  id: string;
  name: string;
  date: string;
  peopleAmount: number;
  budget: number;
  currency: string;
  picture: string;
  participants?: EventItemParticipantsType[];
  deleteCallback?: (id: string) => void;
  openParticipantsCallback?: (id: string) => void;
};

export type EventItemParticipantsType = {
  participantName: string;
  participantSurname: string;
  participantEmail: string;
  takePartInInEvent: boolean;
};

const EventItem = ({
  id,
  name,
  date,
  peopleAmount,
  budget,
  currency,
  picture,
  deleteCallback,
  openParticipantsCallback,
}: EventItemPropsType) => {
  const deleteEvent = () => {
    //TODO: fetch delete event and remove this from DOM
    //TODO: if delete request is done -> delete from DOM
    if (deleteCallback) {
      deleteCallback(id);
    }
  };
  const openParticipants = () => {
    if (openParticipantsCallback) {
      openParticipantsCallback(id);
    }
  };
  return (
    <li className="EventItem">
      <div className="EventItemPicture">
        {picture ? <img alt="eventPicture" src={picture} /> : <p>No picture</p>}
        <div className="EventItemButtonsContainer">
          <button
            className="EventsIteParticipantsButton"
            onClick={openParticipants}
          >
            Participants
          </button>
          <button className="EventsIteDeleteButton" onClick={deleteEvent}>
            Delete
          </button>
        </div>
      </div>
      <div className="EventItemData">
        {name ? <h2>{name}</h2> : <p>No data</p>}
        <p>Date:</p>
        {date ? <span>{date}</span> : <span>No date data</span>}
        <p>People amount:</p>
        {peopleAmount && <span>{peopleAmount}</span>}
        <p>Budget:</p>
        {budget && currency && (
          <span>
            {budget} {currency}
          </span>
        )}
      </div>
    </li>
  );
};

export default EventItem;
