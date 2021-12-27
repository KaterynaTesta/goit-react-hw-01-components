import PropTypes from 'prop-types';
import { Table, TableItem, TableList, TableCard, TableItemTr } from './Transactions.styled';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <TableCard>
        <TableList>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableList>
      </TableCard>

      <TableItem>
        {items.map(item => (
          <TableItemTr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </TableItemTr>
        ))}
      </TableItem>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
