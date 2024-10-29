import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import debounce from "lodash.debounce";
import { useCalendar } from "@/context/CalendarProvider";
import { SchedulerData } from "@/types/global";
import { usePagination } from "@/hooks/usePagination";
import EmptyBox from "../EmptyBox";
import { Grid, Header, LeftColumn } from "..";
import { CalendarProps } from "./types";
import { StyledOuterWrapper, StyledInnerWrapper, StyledEmptyBoxWrapper } from "./styles";

export const Calendar: FC<CalendarProps> = ({
  data,
  onTileClick,
  onItemClick,
  onItemDrop,
  toggleTheme,
  topBarWidth
}) => {
  const [filteredData, setFilteredData] = useState(data);
  const [searchPhrase, setSearchPhrase] = useState("");
  const {
    zoom,
    config: { showThemeToggle }
  } = useCalendar();
  const gridRef = useRef<HTMLDivElement>(null);
  const {
    page,
    totalRowsPerPage,
    rowsPerItem,
    currentPageNum,
    pagesAmount,
    next,
    previous,
    reset
  } = usePagination(filteredData);

  const debouncedFilterData = useRef(
    debounce((dataToFilter: SchedulerData, enteredSearchPhrase: string) => {
      reset();
      setFilteredData(
        dataToFilter.filter((item) =>
          item.label.title.toLowerCase().includes(enteredSearchPhrase.toLowerCase())
        )
      );
    }, 500)
  );

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const phrase = event.target.value;
    setSearchPhrase(phrase);
    debouncedFilterData.current.cancel();
    debouncedFilterData.current(data, phrase);
  };

  useEffect(() => {
    if (searchPhrase) return;

    setFilteredData(data);
  }, [data, searchPhrase]);

  return (
    <StyledOuterWrapper>
      <LeftColumn
        data={page}
        pageNum={currentPageNum}
        pagesAmount={pagesAmount}
        rows={rowsPerItem}
        onLoadNext={next}
        onLoadPrevious={previous}
        searchInputValue={searchPhrase}
        onSearchInputChange={handleSearch}
        onItemClick={onItemClick}
      />
      <StyledInnerWrapper>
        <Header
          zoom={zoom}
          topBarWidth={topBarWidth}
          showThemeToggle={showThemeToggle}
          toggleTheme={toggleTheme}
        />
        {data.length ? (
          <Grid
            data={page}
            zoom={zoom}
            rows={totalRowsPerPage}
            rowsPerItem={rowsPerItem}
            ref={gridRef}
            onTileClick={onTileClick}
            onItemDrop={onItemDrop}
          />
        ) : (
          <StyledEmptyBoxWrapper width={topBarWidth}>
            <EmptyBox />
          </StyledEmptyBoxWrapper>
        )}
      </StyledInnerWrapper>
    </StyledOuterWrapper>
  );
};

export default Calendar;
