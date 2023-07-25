import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import SignUpForm from "../Components/Forms/SignUpForm";
import SignInForm from "../Components/Forms/SignInForm";
import JoinToEventForm from "../Components/Forms/JoinToEventForm";
import AddEventForm from "../Components/Forms/AddEventForm";
import EventItem, {
  EventItemParticipantsType,
  EventItemPropsType,
} from "../Components/EventItem/EventItem";

import image from "../Assets/partyimage.jpg";

const mockData: EventItemPropsType[] = [
  {
    id: "1",
    name: "Cos tam",
    budget: 1000,
    currency: "PLN",
    date: "06.12.2023",
    peopleAmount: 10,
    picture: image,
    participants: [
      {
        participantName: "ParticipantName",
        participantSurname: "ParticipantSurname",
        participantEmail: "ParticipantEmail",
        takePartInInEvent: true,
      },
      {
        participantName: "ParticipantName",
        participantSurname: "ParticipantSurname",
        participantEmail: "ParticipantEmail",
        takePartInInEvent: true,
      },
      {
        participantName: "ParticipantName",
        participantSurname: "ParticipantSurname",
        participantEmail: "ParticipantEmail",
        takePartInInEvent: true,
      },
      {
        participantName: "ParticipantName",
        participantSurname: "ParticipantSurname",
        participantEmail: "ParticipantEmail",
        takePartInInEvent: true,
      },
      {
        participantName: "ParticipantName",
        participantSurname: "ParticipantSurname",
        participantEmail: "ParticipantEmail",
        takePartInInEvent: true,
      },
      {
        participantName: "ParticipantName",
        participantSurname: "ParticipantSurname",
        participantEmail: "ParticipantEmail",
        takePartInInEvent: true,
      },
      {
        participantName: "ParticipantName",
        participantSurname: "ParticipantSurname",
        participantEmail: "ParticipantEmail",
        takePartInInEvent: true,
      },
      {
        participantName: "ParticipantName",
        participantSurname: "ParticipantSurname",
        participantEmail: "ParticipantEmail",
        takePartInInEvent: true,
      },
    ],
  },
  {
    id: "9",
    name: "Cos tam",
    budget: 1000,
    currency: "PLN",
    date: "06.12.2023",
    peopleAmount: 10,
    picture: image,
  },
  {
    id: "8",
    name: "Cos tam",
    budget: 1000,
    currency: "PLN",
    date: "06.12.2023",
    peopleAmount: 10,
    picture: image,
  },
  {
    id: "7",
    name: "Cos tam",
    budget: 1000,
    currency: "PLN",
    date: "06.12.2023",
    peopleAmount: 10,
    picture: image,
  },
  {
    id: "6",
    name: "Cos tam",
    budget: 1000,
    currency: "PLN",
    date: "06.12.2023",
    peopleAmount: 10,
    picture: image,
  },
  {
    id: "5",
    name: "Cos tam",
    budget: 1000,
    currency: "PLN",
    date: "06.12.2023",
    peopleAmount: 10,
    picture: image,
  },
  {
    id: "4",
    name: "Cos tam",
    budget: 1000,
    currency: "PLN",
    date: "06.12.2023",
    peopleAmount: 10,
    picture: image,
  },
  {
    id: "3",
    name: "Cos tam",
    budget: 1000,
    currency: "PLN",
    date: "06.12.2023",
    peopleAmount: 10,
    picture: image,
  },
  {
    id: "2",
    name: "Cos tam",
    budget: 1000,
    currency: "PLN",
    date: "06.12.2023",
    peopleAmount: 10,
    picture: image,
  },
];

const Events: React.FC = () => {
  const [addEventFormVisible, setAddEventFormVisible] =
    useState<boolean>(false);
  const [joinToEventFormVisible, setJoinToEventFormVisible] =
    useState<boolean>(false);
  const [events, setEvents] = useState<EventItemPropsType[]>(mockData);
  const [openParticipantsModal, setOpenParticipantsModal] =
    useState<boolean>(false);
  const [currentEventParticipantsId, setCurrentEventParticipantsId] =
    useState<string>("");

  const addEventsButtonClicked = () => {
    setAddEventFormVisible((prevState) => !prevState);
  };

  const joinToEventButtonClicked = () => {
    setJoinToEventFormVisible((prevState) => !prevState);
  };

  const deleteCallback = (id: string) => {
    //TODO: delete event
  };

  const openParticipantsCallback = (id: string) => {
    setOpenParticipantsModal(true);

    if (id) {
      setCurrentEventParticipantsId(id);
    }
  };

  const drawLotsParticipants = () => {
    //TODO: fetch request to draw lots participants
  };

  const closeParticipantsModalWindow = () => {
    setOpenParticipantsModal(false);
  };

  useEffect(() => {
    //TODO: fetch events, set in state and render
  }, []);

  const getFlickingItems = () => {
    //TODO: when fetch and setState, build EventItem and render it from state(events)
    return mockData.map((data, index) => {
      const { id, budget, currency, date, name, peopleAmount, picture } = data;
      return (
        <EventItem
          id={id}
          key={index}
          budget={budget}
          currency={currency}
          date={date}
          name={name}
          peopleAmount={peopleAmount}
          picture={picture}
          deleteCallback={deleteCallback}
          openParticipantsCallback={openParticipantsCallback}
        ></EventItem>
      );
    });
  };

  const getCurrentParticipants = () => {
    let participants: EventItemParticipantsType[] = [];

    events.map((eventItem) => {
      if (eventItem.id === currentEventParticipantsId) {
        participants = eventItem.participants as EventItemParticipantsType[];
      }
    });

    return participants ?? [];
  };

  const allCurrentParticipantsTakePartIn = () => {
    const currentParticipants = getCurrentParticipants();
    const allTakePartIn = currentParticipants.every(
      (participant) => participant.takePartInInEvent === true
    );

    return allTakePartIn;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="Container">
      <h1 style={{ display: "flex", justifyContent: "center" }}>Events</h1>
      <div className="EventsButtonContainer">
        <button className="EventsButton" onClick={addEventsButtonClicked}>
          AddEvent
        </button>
        <button className="EventsButton" onClick={joinToEventButtonClicked}>
          Join to event
        </button>
      </div>
      <div className="EventsSliderContainer">
        <Slider {...settings}>{getFlickingItems()}</Slider>
      </div>
      {joinToEventFormVisible && (
        <div className="EventsFormContainer">
          <JoinToEventForm
            closeForm={() => {
              setJoinToEventFormVisible((prevState) => !prevState);
            }}
          ></JoinToEventForm>
        </div>
      )}
      {addEventFormVisible && (
        <div className="EventsFormContainer">
          <AddEventForm
            closeForm={() => {
              setAddEventFormVisible((prevState) => !prevState);
            }}
          ></AddEventForm>
        </div>
      )}
      {openParticipantsModal && (
        <div className="EventsParticipantsModalWindow">
          <div className="EventsParticipantsModalContainer">
            <h1 className="EventsParticipantsModalTitle">Participants</h1>
            <div className="EventsParticipantsModalItemsContainer">
              {getCurrentParticipants().map((participant, index) => {
                return (
                  <div
                    className="EventsParticipantsModalItemContainer"
                    key={index}
                  >
                    <input
                      readOnly
                      className="EventsParticipantsModalItemInput"
                      value={participant.participantName}
                    />
                    <input
                      readOnly
                      className="EventsParticipantsModalItemInput"
                      value={participant.participantSurname}
                    />
                    <input
                      readOnly
                      className="EventsParticipantsModalItemInput"
                      value={participant.participantEmail}
                    />
                    <button
                      className={
                        participant.takePartInInEvent
                          ? "EventsParticipantsModalItemTakePartInButton"
                          : "EventsParticipantsModalItemNotTakePartInButton"
                      }
                    ></button>
                  </div>
                );
              })}
            </div>
            <div className="EventsParticipantsModalButtonsContainer">
              <button
                className="EventsParticipantsModalDrawLotsButton"
                disabled={allCurrentParticipantsTakePartIn() ? false : true}
                onClick={drawLotsParticipants}
              >
                Draw Lots!
              </button>
              <button
                className="EventsParticipantsModalCloseButton"
                onClick={closeParticipantsModalWindow}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
