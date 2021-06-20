import React, { useState } from "react";
import { createPortal } from "react-dom";
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
  rectSwappingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import AlbumTile from "./AlbumTile";
import { useAlbumStore } from "../hooks/useAlbumStore";

interface GridProps {
  items: string[];
  onDragEnd: (event: DragEndEvent) => void;
  children: React.ReactNode;
}

export default function Grid({ items, onDragEnd, children }: GridProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
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
  const album = useAlbumStore((state) => state.entities[activeId || ""]);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={(event) => setActiveId(event.active.id)}
      onDragEnd={(event) => {
        onDragEnd(event);
        setActiveId(null);
      }}
      onDragCancel={() => setActiveId(null)}
    >
      <SortableContext items={items} strategy={rectSwappingStrategy}>
        {children}
      </SortableContext>
      {createPortal(
        <DragOverlay adjustScale={true}>
          {album && <AlbumTile album={album} className="shadow-xl" />}
        </DragOverlay>,
        document.body
      )}
    </DndContext>
  );
}

interface SortableItemProps
  extends React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  id: string;
  dragClassNames: string;
  children: React.ReactNode;
}

export function SortableItem({
  id,
  dragClassNames,
  children,
  ...props
}: SortableItemProps) {
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
    <li
      {...props}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={clsx(props.className, isDragging && dragClassNames)}
    >
      {children}
    </li>
  );
}
