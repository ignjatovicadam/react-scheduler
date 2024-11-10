import { useCallback, useState } from "react";
import { mockDataWithSeats } from "./mock/appMockWithSeats";
import { ParsedDatesRange } from "./utils/getDatesRange";
import { ConfigFormValues, From, To, SchedulerData } from "./types/global";
import ConfigPanel from "./components/ConfigPanel";
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

  const onItemResize = (roomId: string, seatId: string, tileId: string, newEndDate: Date) => {
    setData((prevData) =>
      prevData.map((room) => {
        if (room.id === roomId) {
          return {
            ...room,
            seats: room.seats.map((seat) => {
              if (seat.id === seatId) {
                return {
                  ...seat,
                  data: seat.data.map((tile) => {
                    if (tile.id === tileId) {
                      return { ...tile, endDate: newEndDate };
                    }
                    return tile;
                  })
                };
              }
              return seat;
            })
          };
        }
        return room;
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

  const onItemDrop = (from: From, to: To) => {
    setData((prevData) => {
      return prevData.map((room) => {
        if (room.id === from.fromRoom || room.id === to.toRoom) {
          return {
            ...room,
            seats: room.seats.map((seat) => {
              if (room.id === from.fromRoom && seat.id === from.fromSeat) {
                return {
                  ...seat,
                  data: seat.data.filter((item) => item.id !== from.id)
                };
              }

              if (room.id === to.toRoom && seat.id === to.toSeat) {
                const currentItem = prevData
                  .find((r) => r.id === from.fromRoom)
                  ?.seats.find((s) => s.id === from.fromSeat)
                  ?.data.find((item) => item.id === from.id);

                if (currentItem) {
                  return {
                    ...seat,
                    data: [...seat.data, { ...currentItem, startDate: to.start, endDate: to.end }]
                  };
                }
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
      <ConfigPanel values={values} onSubmit={setValues} />
      {isFullscreen ? (
        <Scheduler
          startDate={values.startDate ? new Date(values.startDate).toISOString() : undefined}
          onRangeChange={handleRangeChange}
          data={data}
          isLoading={false}
          config={{ zoom: 0, maxRecordsPerPage: maxRecordsPerPage, showThemeToggle: false }}
          themeMode="dark"
          onItemClick={(data) => console.log("clicked: ", data)}
          onItemDrop={onItemDrop}
          onItemResize={onItemResize}
          onRoomClick={onRoomClick}
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
          />
        </StyledSchedulerFrame>
      )}
    </>
  );
}

export default App;
