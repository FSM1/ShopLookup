/**
 *
 * SelectableList
 *
 */

import React from 'react';
import { List, ListItem, Typography } from '@material-ui/core';

interface OwnProps {
  listName: string;
  items: Array<{ id: number, name: string }>;
  selectItem?(id: number): void
}

const SelectableList: React.SFC<OwnProps> = ({ listName, items, selectItem }: OwnProps) => (
  <>
    <Typography variant='h4'>{listName}</Typography>
    <List>
      {items.map(i => (
        <ListItem onClick={() => selectItem && selectItem(i.id)} key={i.id}>
          {i.name}
        </ListItem>
      ))}
    </List>
  </>
);

export default SelectableList;
