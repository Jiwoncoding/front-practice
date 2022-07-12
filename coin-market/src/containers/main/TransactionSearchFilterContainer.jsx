import { connect } from 'react-redux';
import TransactionSearchFilter from '../../components/main/TransactionSearchFilter';
// import { requestTransactionList } from '../../actions/transactionActions';
import { requestTransactionList } from '../../src/actions/transactionPackActions';
import { setFilter } from '../../src/actions/searchFilterActions';

const mapStateToProps = state => ({
  initValues: state.searchFilter.params,
});

export default connect(mapStateToProps, { setFilter })(TransactionSearchFilter);
