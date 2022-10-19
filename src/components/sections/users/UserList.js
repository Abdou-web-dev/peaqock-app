import { UserActions } from "./userDetails/UserActions";
import { UserCompany } from "./userDetails/UserCompany";
import { UserCountry } from "./userDetails/UserCountry";
import { UserEmail } from "./userDetails/UserEmail";
import { UserName } from "./userDetails/UserName";
import { UserRegDate } from "./userDetails/UserRegDate";

import "./usHeader_styles.scss";

export function UserList({ UsersCollection, filteredResults }) {
  return (
    <div className="user-list">
      {UsersCollection && (
        <div className="user-list-inner">
          {UsersCollection?.map((user, index) => (
            <div key={index} className="user-list-inner-elems">
              <UserName index={index} username={user?.userName} />
              <UserEmail index={index} email={user?.email} />
              <UserCountry index={index} country={user?.country} />
              <UserCompany index={index} company={user?.company} />
              <UserRegDate
                index={index}
                registrationDate={user?.registrationDate}
              />
              <UserActions index={index}></UserActions>
            </div>
          ))}
        </div>
      )}
      {filteredResults && filteredResults?.length && (
        <div className="user-list-inner">
          {filteredResults?.map((user, index) => (
            <div
              key={index}
              className="user-list-inner-elems inner-elems-filtered"
            >
              <UserName
                {...{ filteredResults, index }}
                username={user?.userName}
              />
              <UserEmail {...{ filteredResults, index }} email={user?.email} />
              <UserCountry
                {...{ filteredResults, index }}
                country={user?.country}
              />
              <UserCompany
                {...{ filteredResults, index }}
                company={user?.company}
              />
              <UserRegDate
                {...{ filteredResults, index }}
                registrationDate={user?.registrationDate}
              />
              <UserActions {...{ filteredResults, index }}></UserActions>
            </div>
          ))}
        </div>
      )}
      {!UsersCollection && filteredResults?.length === 0 && (
        <div className="no-user">
          <span className="">{`No user with the typed criteria was found !`}</span>
        </div>
      )}
    </div>
  );
}
