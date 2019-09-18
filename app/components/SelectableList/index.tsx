/**
 *
 * SelectableList
 *
 */

import React from 'react';
import { List, ListItem, Typography, Button } from '@material-ui/core';

interface OwnProps {
  listName: string;
  items: Array<{ id: number, name: string }>;
  selectedItem?: number;
  selectItem?(id?: number): void
}

const SelectableList: React.SFC<OwnProps> = ({ listName, items, selectItem, selectedItem }: OwnProps) => (
  <>
    <Typography variant='h4'>{listName}</Typography>
    <Button onClick={() => selectItem && selectItem(undefined)} disabled={!selectedItem}>Clear selection</Button>
    <List>
      {items.map(i => (
        <ListItem 
          onClick={() => selectItem && selectItem(i.id)} 
          key={i.id}
          selected={!!selectedItem && (selectedItem === i.id)} >
          {i.name}
        </ListItem>
      ))}
    </List>
  </>
);

export default SelectableList;
