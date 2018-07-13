import React from "react";
import Details from "../containers/details";
import ClientsList from "../containers/clients-list";

const WebPage = () => (
  <div class="ui text segment">
    <table width="100%" height="100%">
      <tr>
        <td width="200px" valign="top">
          <ClientsList />
        </td>
        <td valign="top">
          <Details />
        </td>
      </tr>
    </table>
  </div>
);

export default WebPage;
