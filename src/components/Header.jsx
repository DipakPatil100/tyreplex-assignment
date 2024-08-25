import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [submenuAnchorEl, setSubmenuAnchorEl] = React.useState(null);
  const [expandedSubMenu, setExpandedSubMenu] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isSubMenuOpen = Boolean(submenuAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSubMenuOpen = (event) => {
    setSubmenuAnchorEl(event.currentTarget);
  };

  const handleSubMenuClose = () => {
    setSubmenuAnchorEl(null);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleSubMenuClose();
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleExpandSubMenu = (item) => {
    setExpandedSubMenu(expandedSubMenu === item ? null : item);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={() => handleExpandSubMenu("CarTyres")}>
        <p>Car Tyres</p>
        <ArrowRightIcon />
      </MenuItem>
      <Menu
        anchorEl={submenuAnchorEl}
        open={expandedSubMenu === "CarTyres"}
        onClose={handleSubMenuClose}
        keepMounted
      >
        <MenuItem onClick={handleMenuClose}>CEAT Tyres</MenuItem>
        <MenuItem onClick={handleMenuClose}>MRF Tyres</MenuItem>
        <MenuItem onClick={handleMenuClose}>Bridgestone Tyres</MenuItem>
      </Menu>
      <MenuItem>
        <p>Bike Tyres</p>
      </MenuItem>
      <MenuItem>
        <p>Tyre Pressure</p>
      </MenuItem>
      <MenuItem>
        <p>Commercial Tyres</p>
      </MenuItem>
      <MenuItem>
        <p>Accessories</p>
      </MenuItem>
      <MenuItem>
        <p>More</p>
      </MenuItem>
    </Menu>
  );

  const subMenuId = "primary-submenu";
  const renderSubMenu = (
    <Menu
      anchorEl={submenuAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={subMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isSubMenuOpen}
      onClose={handleSubMenuClose}
      sx={{ mt: 6 }} // Adjust positioning if needed
    >
      <MenuItem onClick={handleMenuClose}>CEAT Tyres</MenuItem>
      <MenuItem onClick={handleMenuClose}>MRF Tyres</MenuItem>
      <MenuItem onClick={handleMenuClose}>Bridgestone Tyres</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          padding: "0 20px",
          backgroundColor: "#8386f7a1",
        }}
        position="static"
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "block", sm: "block" } }}
          >
            {/* TyrePlex */}
            <img
              src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60"
              alt=""
            />
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <MenuItem
              // onMouseEnter={handleSubMenuOpen}
              onClick={handleSubMenuOpen}
            >
              <p>Car Tyres</p>
            </MenuItem>
            <MenuItem>
              <p>Bike Tyres</p>
            </MenuItem>
            <MenuItem>
              <p>Tyre Pressure</p>
            </MenuItem>
            <MenuItem>
              <p>Commercial Tyres</p>
            </MenuItem>
            <MenuItem>
              <p>Accessories</p>
            </MenuItem>
            <MenuItem>
              <p>More</p>
            </MenuItem>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {renderSubMenu}
    </Box>
  );
}
