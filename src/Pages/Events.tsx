import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import SignUpForm from "../Components/Forms/SignUpForm";
import SignInForm from "../Components/Forms/SignInForm";
import JoinToEventForm from "../Components/Forms/JoinToEventForm";
import AddEventForm, {
  AddEventFormDataType,
  AddEventFormParticipantsDataType,
} from "../Components/Forms/AddEventForm";
import EventItem, {
  EventItemParticipantsType,
  EventItemPropsType,
} from "../Components/EventItem/EventItem";

import { EventDto, InvitationDto } from "../Dto/DtoProvider";
import { post } from "../Api/axios";
import { useAuth } from "../Context/Auth/AuthContextPovider";

import pic1 from "../Assets/pic1.jpg";
import pic2 from "../Assets/pic2.jpg";
import pic3 from "../Assets/pic3.jpg";
import pic4 from "../Assets/pic4.jpg";
import pic5 from "../Assets/pic5.jpg";
import pic6 from "../Assets/pic6.jpg";
import pic7 from "../Assets/pic7.jpg";
import pic8 from "../Assets/pic8.jpg";

const pictureData = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];
const drawLotPictures = () => {
  return pictureData[Math.floor(Math.random() * pictureData.length)];
};

const GET_EVENTS_URL = "/user-events";
const ADD_EVENT_URL = "/event/add";

// const mockData: EventItemPropsType[] = [
//   {
//     id: "1",
//     name: "Cos tam",
//     budget: 1000,
//     currency: "PLN",
//     date: "06.12.2023",
//     peopleAmount: 10,
//     picture: image,
//     participants: [
//       {
//         participantName: "ParticipantName",
//         participantSurname: "ParticipantSurname",
//         participantEmail: "ParticipantEmail",
//         takePartInInEvent: true,
//       },
//       {
//         participantName: "ParticipantName",
//         participantSurname: "ParticipantSurname",
//         participantEmail: "ParticipantEmail",
//         takePartInInEvent: true,
//       },
//       {
//         participantName: "ParticipantName",
//         participantSurname: "ParticipantSurname",
//         participantEmail: "ParticipantEmail",
//         takePartInInEvent: true,
//       },
//       {
//         participantName: "ParticipantName",
//         participantSurname: "ParticipantSurname",
//         participantEmail: "ParticipantEmail",
//         takePartInInEvent: true,
//       },
//       {
//         participantName: "ParticipantName",
//         participantSurname: "ParticipantSurname",
//         participantEmail: "ParticipantEmail",
//         takePartInInEvent: true,
//       },
//       {
//         participantName: "ParticipantName",
//         participantSurname: "ParticipantSurname",
//         participantEmail: "ParticipantEmail",
//         takePartInInEvent: true,
//       },
//       {
//         participantName: "ParticipantName",
//         participantSurname: "ParticipantSurname",
//         participantEmail: "ParticipantEmail",
//         takePartInInEvent: true,
//       },
//       {
//         participantName: "ParticipantName",
//         participantSurname: "ParticipantSurname",
//         participantEmail: "ParticipantEmail",
//         takePartInInEvent: true,
//       },
//     ],
//   },
//   {
//     id: "9",
//     name: "Cos tam",
//     budget: 1000,
//     currency: "PLN",
//     date: "06.12.2023",
//     peopleAmount: 10,
//     picture: image,
//   },
//   {
//     id: "8",
//     name: "Cos tam",
//     budget: 1000,
//     currency: "PLN",
//     date: "06.12.2023",
//     peopleAmount: 10,
//     picture: image,
//   },
//   {
//     id: "7",
//     name: "Cos tam",
//     budget: 1000,
//     currency: "PLN",
//     date: "06.12.2023",
//     peopleAmount: 10,
//     picture: image,
//   },
//   {
//     id: "6",
//     name: "Cos tam",
//     budget: 1000,
//     currency: "PLN",
//     date: "06.12.2023",
//     peopleAmount: 10,
//     picture: image,
//   },
//   {
//     id: "5",
//     name: "Cos tam",
//     budget: 1000,
//     currency: "PLN",
//     date: "06.12.2023",
//     peopleAmount: 10,
//     picture: image,
//   },
//   {
//     id: "4",
//     name: "Cos tam",
//     budget: 1000,
//     currency: "PLN",
//     date: "06.12.2023",
//     peopleAmount: 10,
//     picture: image,
//   },
//   {
//     id: "3",
//     name: "Cos tam",
//     budget: 1000,
//     currency: "PLN",
//     date: "06.12.2023",
//     peopleAmount: 10,
//     picture: image,
//   },
//   {
//     id: "2",
//     name: "Cos tam",
//     budget: 1000,
//     currency: "PLN",
//     date: "06.12.2023",
//     peopleAmount: 10,
//     picture: image,
//   },
// ];

const Events: React.FC = () => {
  const { token } = useAuth();

  const [addEventFormVisible, setAddEventFormVisible] =
    useState<boolean>(false);
  const [joinToEventFormVisible, setJoinToEventFormVisible] =
    useState<boolean>(false);
  const [openParticipantsModal, setOpenParticipantsModal] =
    useState<boolean>(false);

  const [events, setEvents] = useState<EventItemPropsType[]>([]);
  const [currentEventParticipantsId, setCurrentEventParticipantsId] =
    useState<string>("");

  //JOIN TO EVENT PART
  const joinToEventButtonClicked = () => {
    setJoinToEventFormVisible((prevState) => !prevState);
  };

  const sendJoinToEventButtonClicked = () => {
    //TODO: Joint to event request
  };

  const closeJoinToEventButtonClicked = () => {
    setJoinToEventFormVisible((prevState) => !prevState);
  };

  //ADD EVENT PART
  const addEventsButtonClicked = () => {
    setAddEventFormVisible((prevState) => !prevState);
  };

  const sendAddEventButtonClicked = (data: AddEventFormDataType) => {
    //TODO: Add event request
    // String name;
    // LocalDate eventDate;
    // Integer numberOfPeople;
    // Integer budget;
    // String currency;
    // String organizerId; //ID zalogowanego użytkownika
    // List<InvitationDto> listOfInvitationForEvent;
    const getParticipants = (
      participants: AddEventFormParticipantsDataType[]
    ): InvitationDto[] => {
      const participantMembers: InvitationDto[] = [];

      participants.forEach((participant) => {
        const participantMember: InvitationDto = {
          participantName: participant.participantName,
          participantSurname: participant.participantSurname,
          participantEmail: participant.participantEmail,
        };

        participantMembers.push(participantMember);
      });

      return participantMembers;
    };
    const dataToSend: EventDto = {
      budget: data.budget,
      currency: data.currency,
      eventDate: new Date(data.date),
      name: data.name,
      numberOfPeople: data.peopleAmount,
      organizerId: token,
      listOfInvitationForEvent: getParticipants(data.participants),
    };

    const addEvents = async () => {
      await post(`${ADD_EVENT_URL}/${token}`, dataToSend)
        .then((responseData) => {
          if (responseData) {
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    addEvents();
  };

  const closeAddEventButtonClicked = () => {
    setAddEventFormVisible((prevState) => !prevState);
  };

  const deleteEventCallback = (id: string) => {
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
    const dataToSend: any = {
      authorization: token,
    };

    try {
      const getEvents = async () => {
        await post(`${GET_EVENTS_URL}/${token}`, dataToSend)
          .then((responseData: EventDto[]) => {
            if (responseData) {
              const eventItemData: EventItemPropsType[] = [];

              responseData.forEach((data) => {
                const eventItem: EventItemPropsType = {
                  id: (data.id as number).toFixed(),
                  budget: data.budget,
                  currency: data.currency,
                  date: data.eventDate.toISOString(),
                  name: data.name,
                  peopleAmount: data.numberOfPeople,
                  picture: drawLotPictures(),
                  organizerId: data.organizerId,
                  deleteCallback: deleteEventCallback,
                  openParticipantsCallback: openParticipantsCallback,
                };

                eventItemData.push(eventItem);
              });

              setEvents(eventItemData);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      };

      getEvents();
    } catch (error: unknown) {
      console.log("error", error);
    }
  }, [events]);

  const getFlickingItems = () => {
    //TODO: when fetch and setState, build EventItem and render it from state(events)
    return events.map((data, index) => {
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
          deleteCallback={deleteEventCallback}
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
            formCallback={sendJoinToEventButtonClicked}
            closeForm={closeJoinToEventButtonClicked}
          ></JoinToEventForm>
        </div>
      )}
      {addEventFormVisible && (
        <div className="EventsFormContainer">
          <AddEventForm
            formCallback={sendAddEventButtonClicked}
            closeForm={closeAddEventButtonClicked}
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
