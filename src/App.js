import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content-container">
        <div className="header">
        <h1>Notifications <span>3</span></h1>
        <p>Mark all as read</p>
        </div>
        <div className="notification noti-1">
          <div className="avatar mark-webber"></div>
          <div className="notification-text">
            <span className='username'>Mark Webber</span> <span className='notification-content'>reacted to your recent post My first tournament today!</span>
          </div>
          <div className="posting-time">
            1m ago
          </div>
        </div>
        <div className="notification noti-2">
          <div className="avatar angela-gray"></div>
          <div className="notification-text">
            <span className='username'>Angela Gray</span> <span className='notification-content'>followed you</span>
          </div>
          <div className="posting-time">
            5m ago
          </div>
        </div>
        <div className="notification noti-3">
          <div className="avatar jacob-thompson"></div>
          <div className="notification-text">
            <span className='username'>Jacob Thompson</span> <span className='notification-content'>has joined your group 
            <span className='chess-club'> Chess Club</span></span>
          </div>
          <div className="posting-time">
            1 day ago
          </div>
        </div>
        <div className="notification noti-4">
          <div className="avatar rizky-hasanuddin"></div>
          <div className='text-content'>
            <div className="notification-text">
              <span className='username'>Rizky Hasanuddin</span> <span className='notification-content'>sent you a private message</span>
            </div>
            <div className="posting-time">
              5 days ago
            </div>
            <div className="notification-text comment">
              <span className='notification-content'>
                Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
                I'm already having lots of fun and improving my game.
              </span>
            </div>
          </div>
        </div>
        <div className="notification">
          <div className="avatar kimberly-smith"></div>
          <div className="notification-text">
            <span className='username'>Kimberly Smith</span> <span className='notification-content'>commented on your picture</span>
          </div>
          <div className="posting-time">
            1 week ago
          </div>
          <div className="user-post"></div>
        </div>
        <div className="notification">
          <div className="avatar nathan-peterson"></div>
          <div className="notification-text">
            <span className='username'>Nathan Peterson</span> <span className='notification-content'>reacted to your recent post 
            <span className='previous-post'> 5 end-game strategies to increase your win rate</span></span>
          </div>
          <div className="posting-time">
            2 weeks ago
          </div>
        </div>
        <div className="notification">
          <div className="avatar anna-kim"></div>
          <div className="notification-text">
            <span className='username'>Anna Kim</span> <span className='notification-content'>left the group
            <span className='chess-club'> Chess Club</span></span>
          </div>
          <div className="posting-time">
            2 weeks ago
          </div>
        </div>
      </div>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}

export default App;
