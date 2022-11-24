import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(
//   <Profile
//     username={data.username}
//     tag={data.tag}
//     avatar={data.avatar}
//     followers={data.stats.followers}
//     views={data.stats.views}
//     likes={data.stats.likes}
//   />,
//   document.querySelector('#root')
// );

// const user = (
//   <div class="profile">
//     <div class="description">
//       <img src={data.avatar} alt="User avatar" class="avatar" />
//       <p class="name">{data.username}</p>
//       <p class="tag">@{data.tag}</p>
//       <p class="location">{data.location}</p>
//     </div>

//     <ul class="stats">
//       <li>
//         <span class="label">Followers</span>
//         <span class="quantity">{data.stats.followers}</span>
//       </li>
//       <li>
//         <span class="label">Views</span>
//         <span class="quantity">{data.stats.views}</span>
//       </li>
//       <li>
//         <span class="label">Likes</span>
//         <span class="quantity">{data.stats.likes}</span>
//       </li>
//     </ul>
//   </div>
// );
