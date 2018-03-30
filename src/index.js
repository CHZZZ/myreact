import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider, DatePicker, message } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  handleChange(date) {
    console.log(date!=null,99)
    if(date!=null)
    message.info('您选择的日期是: ' + moment(date).format('YYYY年MM月DD日'));
    else
    message.info('未选择日期! ' );    
    this.setState({ date });
  }
  render() {
    const { date } = this.state
    return (
      <LocaleProvider locale={zhCN}>
        <div style={{ width: 400, margin: '100px auto' }}>
          <DatePicker onChange={value => this.handleChange(value)} />
          <div style={{ marginTop: 20 }}>当前日期：{date!=null?String(date):''}</div>
        </div>
      </LocaleProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));