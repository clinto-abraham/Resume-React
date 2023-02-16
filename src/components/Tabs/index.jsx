import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { Introduction } from '../Introduction';
import SignIn from '../SignInGoogle';
import { Contact } from '../Contact';
import { CreateSkillCards, MySkills } from '../Skills';
import { Container, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { registerTabIndex } from '../../Redux/navbarSlice';
import Profile from '../Profile';

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 6px 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${blue[200]};
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #fff;
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)(
  ({ theme }) => `
  width: 97.5%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  padding: 20px 12px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  border-radius: 12px;

  `,
);

const TabsList = styled(TabsListUnstyled)(
  ({ theme }) => `
  min-width: 400px;
  background-color: ${blue[500]};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  `,
);

const TabListArrays = ['My Introduction', 'Skills', 'Projects', 'Contact', 'Profile']
export default function TabSwitchBar() {
  const dispatch = useDispatch()
  const { tabIndex } = useSelector(state => state.navbar)
  console.log(tabIndex)
  return (
    <Container sx={{ padding: '1rem' }}>
      <TabsUnstyled defaultValue={0}>
        <TabsList onClick={(e) => dispatch(registerTabIndex(TabListArrays.indexOf(e.target.innerHTML)))}>
          {TabListArrays.map(ele => (
            <Tab key={ele}>{ele}</Tab>
          ))}
        </TabsList>
        <TabPanel value={0}><Introduction /></TabPanel>
        <TabPanel value={1}><MySkills CreateSkillCards={CreateSkillCards} /></TabPanel>
        <TabPanel value={2}><SignIn /></TabPanel>
        <TabPanel value={3}><Contact /></TabPanel>
        <TabPanel value={4}><Profile /></TabPanel>
      </TabsUnstyled>
    </Container>
  );
}
