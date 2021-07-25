import React from "react";
import UserHeader from "../components/User/UserHeader";
import Account from "../components/User/Account";
import { accountDatas } from "../data/account-datas";

export default function user() {
  return (
    <main className="main bg-dark">
      <UserHeader />
      <h2 className="sr-only">Accounts</h2>
      {accountDatas.map((obj, index) => {
        return (
          <Account
            title={obj.title}
            amount={obj.amount}
            description={obj.description}
          />
        );
      })}
    </main>
  );
}
