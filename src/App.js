import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './sidebarpages/dashboard/Dashboard';
import Conversations from './sidebarpages/conversations/Conversations';
import Automations from './sidebarpages/automations/Automations';
import Campaigns from './sidebarpages/campaigns/Campaigns';
import Popup from './sidebarpages/popup/Popup';
import Livechat from './sidebarpages/livechat/Livechat';
import Segments from './sidebarpages/segments/Segments';
import Integrations from './sidebarpages/integrations/Integrations';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="app__body">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/conversations" element={<Conversations />} />
            <Route path="/automations" element={<Automations />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/popup" element={<Popup />} />
            <Route path="/livechat" element={<Livechat />} />
            <Route path="/segments" element={<Segments />} />
            <Route path="/integrations" element={<Integrations />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
