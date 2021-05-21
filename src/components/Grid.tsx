import React, { useState } from "react";
import clsx from "clsx";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  rectSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Albums } from "../hooks/useAlbumState";
import AlbumTile from "./AlbumTile";

interface GridProps {
  albums: Albums;
  onDragEnd: (event: DragEndEvent) => void;
  children: React.ReactNode;
}

export default function Grid({ albums, onDragEnd, children }: GridProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const items = albums.ids.map((id) => albums.entities[id]);
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 15,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        distance: 15,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={(event) => setActiveId(event.active.id)}
      onDragEnd={(event) => {
        setActiveId(null);
        onDragEnd(event);
      }}
    >
      <SortableContext items={items} strategy={rectSortingStrategy}>
        {children}
      </SortableContext>
      <DragOverlay>
        {activeId ? (
          <AlbumTile album={albums.entities[activeId]} className="shadow-xl" />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}

interface SortableItemProps {
  id: string;
  children: React.ReactNode;
}

export function SortableItem({ id, children }: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={clsx(
        "inline-block focus:outline-none cursor-default",
        isDragging && "invisible"
      )}
      {...attributes}
      {...listeners}
    >
      {children}
    </div>
  );
}
