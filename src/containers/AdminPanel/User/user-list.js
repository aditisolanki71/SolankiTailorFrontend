//file-3
// import React, { Fragment } from "react";
// class UserList extends React.Component {
//   render() {
//     return (
//       <Fragment>
//         <div>
//           <h1>user ist page</h1>
//         </div>
//       </Fragment>
//     );
//   }
// }

// export default UserList;

/*eslint-disable */
import React from "react";
import { Table, Dropdown } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const wordWrap = {
  maxWidth: 0,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
};

const getHeaderRow = () => (
  <Table.Row>
    <Table.HeaderCell>Name</Table.HeaderCell>
    <Table.HeaderCell>Email</Table.HeaderCell>
    <Table.HeaderCell>Address</Table.HeaderCell>
    <Table.HeaderCell>Action</Table.HeaderCell>
  </Table.Row>
);

const buildTableRow = (item, props) => (
  <Table.Row
    className="pointer"
    key={item.id}
    onClick={() => props.onEdit(item.id)}
  >
    <Table.Cell style={wordWrap}>{item.name}</Table.Cell>
    <Table.Cell style={wordWrap}>{item.email}</Table.Cell>
    <Table.Cell style={wordWrap}>{item.address}</Table.Cell>
    <Table.Cell style={{ overflow: "unset" }}>
     <i
        onClick={e => {
          e.stopPropagation();
          props.onEdit(item.id);
        }}
        className="edit icon"
      />
      <i
        onClick={e => {
          e.stopPropagation();
          if (!item.oob) props.onRemove(item.id);
        }}
        // onClick={(e) => { e.stopPropagation(); props.onRemove(item.id); }}
        className={`trash icon ${item.oob ? "disabled no-pointer" : ""}`}
      />
    </Table.Cell>
  </Table.Row>
);

export const UserList = props => (
  <Table celled>
    <Table.Header>{getHeaderRow()}</Table.Header>
    <Table.Body>
      {(props.list || []).length > 0 ? (
        props.list.map((item, index) => buildTableRow(item, props, index))
      ) : (
        <Table.Row>
          <Table.Cell colSpan={4} className="no-data-found">
            NO Data Found
          </Table.Cell>
        </Table.Row>
      )}
    </Table.Body>
  </Table>
);

UserList.defaultProps = {
  list: [],
  onEdit: e => e,
  onRemove: e => e
};

export default UserList;