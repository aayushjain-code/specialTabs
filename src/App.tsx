import SpecialTabs from './components/SpecialTabs';

interface Screen {
  label: string;
  component: JSX.Element;
}

function App() {
  const screens: Screen[] = [
    { label: 'First', component: <div className='content-bg blue'>First Tab Content</div> },
    { label: 'Second', component: <div className='content-bg red'>Second Tab Content</div> },
    { label: 'Third', component: <div className='content-bg yellow'>Third Tab Content</div> },
  ];

  return (
    <>
      <SpecialTabs screens={screens} defaultTabIndex={0}/>
    </>
  )
}

export default App
