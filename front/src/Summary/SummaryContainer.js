import React, { Component } from 'react';
import Summary from './Summary';
import api from '../api';
import values from '../values';

import withLogin from '../withLogin';

class SummaryContainer extends Component {
  state = {
    transactions: undefined,
    categoryRules: undefined,
    tagRules: undefined,
    tags: undefined,
    categories: undefined,
    accounts: undefined,
    currentMonth: values.months[new Date().getMonth()],
  };

  updateMonth = (month) => {
    this.setState({currentMonth: month}, () => this.getSummaryData(month));
  }

  componentDidMount() {
    this.getSummaryData()
  };

  getSummaryData = () => {
    const { accountId } = this.props;
    return Promise.all([
      api.loadTransactions(accountId, this.state.currentMonth),
      api.loadCategoryRules(accountId),
      api.loadTagRules(accountId),
      api.loadTags(accountId),
      api.loadCategories(accountId)
    ])
      .then( res => {
        const [
          transactions,
          categoryRules,
          tagRules,
          tags,
          categories,
        ] = res;

        if (transactions.error) {
          alert(transactions.error);
        }

        const accounts = [...new Set(transactions.result.map(x => x.account_id.slice(0,10)))];

        this.setState({
          transactions: transactions.result,
          categoryRules: categoryRules.result,
          tagRules: tagRules.result,
          tags: tags.result.slice().sort(),
          categories: categories.result.slice().sort(),
          accounts: accounts,
        });
      })
      .catch( e => {
        console.error("failed loading summary data")
        console.error(e)
      })
  };

  render() {
    const { accountId } = this.props;
    const {transactions, tags, categories, tagRules, categoryRules} = this.state;
    const summaryData = transactions && tags && categories && tagRules && categoryRules
      ? {
        transactions: transactions,
        tags: tags,
        categories: categories,
        tagRules: tagRules,
        categoryRules: categoryRules,
      }
      : undefined

    const { accounts, currentMonth } = this.state;

    return (
      <Summary
        accountId={ accountId }
        summaryData={ summaryData }
        getSummaryData={ this.getSummaryData }
        updateMonth = { this.updateMonth }
        currentMonth = { currentMonth }
        accounts = { accounts }
      />
    );
  }
};

export default withLogin(SummaryContainer);
