import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import Fab from "@mui/material/Fab";
import { registerDrawerOpen } from "../../../redux/navbarSlice";
import { useDispatch, useSelector } from "react-redux";

const ListLeftBar = () => {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{ width: 50 }}
      role="presentation"
      onClick={() => dispatch(registerDrawerOpen(false))}
      onKeyDown={() => dispatch(registerDrawerOpen(false))}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              {/* <ListItemText primary={text} /> */}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              {/* <ListItemText primary={text} /> */}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default function IconBar() {
  const dispatch = useDispatch();
  const { drawerOpen } = useSelector((state) => state.navbar);

  const anchor = "left";

  const toggleDrawer = (toggle) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    dispatch(registerDrawerOpen(toggle));
  };

  return (
    <div>
      <Fab
        color="secondary"
        aria-label="add"
        onClick={toggleDrawer(true)}
        id="icon-bar-left"
      />

      <Drawer anchor={anchor} open={drawerOpen} onClose={toggleDrawer(false)}>
        <ListLeftBar />
      </Drawer>
    </div>
  );
}
