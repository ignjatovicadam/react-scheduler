import { useCallback, useState } from "react";
import { mockDataWithSeats } from "./mock/appMockWithSeats";
import { ParsedDatesRange } from "./utils/getDatesRange";
import {
  ConfigFormValues,
  OnItemDropProps,
  SchedulerData,
  SchedulerProjectData,
  OnItemResizeProps
} from "./types/global";
import { StyledSchedulerFrame } from "./styles";
import { Scheduler } from ".";

function App() {
  const [values, setValues] = useState<ConfigFormValues>({
    peopleCount: 15,
    projectsPerYear: 5,
    yearsCovered: 0,
    startDate: undefined,
    maxRecordsPerPage: 50,
    isFullscreen: true
  });

  const { isFullscreen, maxRecordsPerPage } = values;
  const [data, setData] = useState<SchedulerData>(mockDataWithSeats);
  const [, setRange] = useState<ParsedDatesRange>({
    startDate: new Date(),
    endDate: new Date()
  });

  const handleRangeChange = useCallback((range: ParsedDatesRange) => setRange(range), []);

  const openHistory = () => {};

  const onItemResize = (dto: OnItemResizeProps) => {
    setData((prevData) =>
      prevData.map((roomOld) => {
        if (roomOld.id === dto.room.id) {
          return {
            ...roomOld,
            seats: roomOld.seats.map((seatOld) => {
              if (seatOld.id === dto.seat.id) {
                return {
                  ...seatOld,
                  data: seatOld.data.map((tile) => {
                    if (tile.id === dto.id) {
                      return {
                        ...tile,
                        startDate: dto.newStartDate ? dto.newStartDate : dto.oldStartDate,
                        endDate: dto.newEndDate ? dto.newEndDate : dto.oldEndDate
                      };
                    }
                    return tile;
                  })
                };
              }
              return seatOld;
            })
          };
        }
        return roomOld;
      })
    );
  };

  const onRoomClick = (roomId: string) => {
    setData((prevData) => {
      return prevData.map((room) => {
        if (room.id === roomId) {
          return {
            ...room,
            collapsed: !room.collapsed
          };
        }

        return room;
      });
    });
  };

  const onCommentClick = (data: SchedulerProjectData) => {
    console.log(data);
  };

  const onItemDrop = (dto: OnItemDropProps) => {
    setData((prevData) => {
      const currentItem = prevData
        .find((room) => room.id === dto.oldRoom.id)
        ?.seats.find((seat) => seat.id === dto.oldSeat.id)
        ?.data.find((item) => item.id === dto.id);

      if (!currentItem) {
        return prevData;
      }

      return prevData.map((room) => {
        if (room.id === dto.oldRoom.id || room.id === dto.newRoom.id) {
          return {
            ...room,
            seats: room.seats.map((seat) => {
              if (room.id === dto.oldRoom.id && seat.id === dto.oldSeat.id) {
                return {
                  ...seat,
                  data: seat.data.filter((item) => item.id !== dto.id)
                };
              }

              if (room.id === dto.newRoom.id && seat.id === dto.newSeat.id) {
                return {
                  ...seat,
                  data: [
                    ...seat.data,
                    {
                      ...currentItem,
                      startDate: dto.newStartDate,
                      endDate: dto.newEndDate,
                      bgColor: "rgb(254,165,177)"
                    }
                  ]
                };
              }

              return seat;
            })
          };
        }

        return room;
      });
    });
  };

  return (
    <>
      {isFullscreen ? (
        <Scheduler
          startDate={values.startDate ? new Date(values.startDate).toISOString() : undefined}
          onRangeChange={handleRangeChange}
          data={data}
          isLoading={false}
          config={{ zoom: 0, maxRecordsPerPage: maxRecordsPerPage, showThemeToggle: false }}
          themeMode="light"
          onItemClick={(data) => console.log("clicked: ", data)}
          onItemDrop={onItemDrop}
          onItemResize={onItemResize}
          onRoomClick={onRoomClick}
          onCommentClick={onCommentClick}
          openHistory={openHistory}
        />
      ) : (
        <StyledSchedulerFrame>
          <Scheduler
            startDate={values.startDate ? new Date(values.startDate).toISOString() : undefined}
            onRangeChange={handleRangeChange}
            isLoading={false}
            data={data}
            themeMode="dark"
            onItemClick={(data) => console.log("clicked: ", data)}
            onItemDrop={onItemDrop}
            onItemResize={onItemResize}
            onRoomClick={onRoomClick}
            onCommentClick={onCommentClick}
            openHistory={openHistory}
          />
        </StyledSchedulerFrame>
      )}
    </>
  );
}

export default App;
