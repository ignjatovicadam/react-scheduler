import { FC, useCallback } from "react";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Tile } from "..";
import { PlacedTiles, TilesProps } from "./types";

const Tiles: FC<TilesProps> = ({ data, zoom, onTileClick, onTileDrop }) => {
  const placeTiles = useCallback((): PlacedTiles => {
    let rows = 0;
    return data
      .map((person, personIndex) => {
        if (personIndex > 0) {
          rows += Math.max(data[personIndex - 1].data.length, 1);
        }
        return person.data.map((projectsPerRow, rowIndex) =>
          projectsPerRow.map((project) => (
            <Tile
              key={project.id}
              row={rowIndex + rows}
              data={project}
              zoom={zoom}
              onTileClick={onTileClick}
              onTileDrop={onTileDrop}
            />
          ))
        );
      })
      .flat(2);
  }, [data, onTileClick, onTileDrop, zoom]);

  return (
    <DndProvider backend={HTML5Backend}>
      {placeTiles()}
    </DndProvider>
  );
};

export default Tiles;
