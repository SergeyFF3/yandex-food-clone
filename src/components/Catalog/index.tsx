import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

interface ICatalogProps {
  text: string;
}

const Catalog: React.FC<ICatalogProps> = ({ text }) => {
  return (
    <List component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary={text} />
      </ListItem>
    </List>
  );
};

export default Catalog;
