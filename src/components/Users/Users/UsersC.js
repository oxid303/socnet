import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import defaultUserPhoto from '../../../assets/images/default_user.png';

class Users extends React.Component {

  axiosGet(currentPage) {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(responce => {
      let items = Array.isArray(responce.data.items) ? responce.data.items : [];
      this.props.setUsers(items);
      this.props.setTotalUsersCount(responce.data.totalCount);
    })
  }

  componentDidMount() {
    this.axiosGet(this.props.currentPage);
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.axiosGet(pageNumber);
  }

  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div className={s.content}>
        {
          pages.length ?
            pages.map(p => (
              <span key={p}>
                <button
                  onClick={() => this.onPageChanged(p)}
                  className={this.props.currentPage === p ? s.selectedPage : undefined}>{p}</button>
              </span>
            )) : 'No Users'
        }
        {
          this.props.users.map(u =>
            <div key={u.id}>
              <span>
                <div className={s.avatar}>
                  <img src={u.photos.small != null ? u.photos.small : defaultUserPhoto} alt="no available" />
                </div>
                <div>
                  {<button onClick={() => u.followed ? this.props.unfollow(u.id) : this.props.follow(u.id)}>
                    {u.followed ? 'Unsubscribe' : 'Subscribe'}
                  </button>}
                </div>
              </span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
            </div>
          )
        }
      </div>
    )
  }
}

export default Users;
