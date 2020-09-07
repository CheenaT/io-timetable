import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles(theme => ({
  root: {
    ['@media (min-width: 768px)']: {
      width: '95% !important',
    },
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    ['@media (min-width: 240px)']: {
      width: '95%',
    },
  },
  table: {
    minWidth: 650,
    ['@media (min-width: 240px)']: {
      minWidth: 50
    },
  },
  tableRow: {
    width: 30,
  },
}));

function createData(time, calories, link, day, name) {
  return { time, calories, link, day, name };
}

const rows = [
  createData('08:45 10:20', 'Базы данных', 'https://ispras.zoom.us/j/96584169181?pwd=dW1iVmZBSWdQN2dKNXBtakdNY0lWZz09', 'Monday', 'Морозов | Тарлапан'),
  createData('10:30 12:05', 'Урматы', 'https://us04web.zoom.us/j/79820777705?pwd=Rms0cU9xTlhzTzd4Mkc2NjNVYzh6dz09', 'Monday','Простов Василий Андреевич'),
  createData('12:15 13:50', 262, 'https://www.youtube.com/playlist?list=PLOaW8o20mEgi_9DKM3zURWlvd7BF7MIXp', 'Monday', 'Марченков Сергей Серафимович, Ложкин Сергей Андреевич'),
  createData('14:35 16:10', 305, 'https://www.youtube.com/playlist?list=PLOaW8o20mEgisfwS1kf2NNH0M-bc14Eil', 'Monday', 'Морозов Владимир Викторович'),
  createData('16:20 17:55', 356, 'https://www.youtube.com/playlist?list=PLOaW8o20mEgisfwS1kf2NNH0M-bc14Eil', 'Monday', 'Морозов Владимир Викторович'),
  createData('18:00', 'ТИГР консультация', 'https://us04web.zoom.us/j/5267094600?pwd=NkQrN21ab2RnZ1VxY1c4eXhjcmNGUT09', 'Monday', 'Морозов Владимир Викторович'),
  createData('08:45 10:20', 356, 'https://us02web.zoom.us/j/82541244193?pwd=S1Q5T3hlS1J4V2pacVdEOGo4Ui9Xdz09#success', 'Tuesday', 'Поспелова Ирина Игоревна'),
  createData('10:30 12:05', 356, 'https://us02web.zoom.us/j/82706731808?pwd=MDZXUWRlMHdtcmVDQTJDRmNNR2tzQT09', 'Tuesday', 'Алексей Феридович Измаилов'),
  createData('12:50 14:25', 356, '', 'Tuesday', 'Денисов Дмитрий Витальевич'),
  createData('14:35 16:10', 356, 'https://zoom.us/j/99333219434?pwd=UU9SSHRMVEE2dXJjSWh1OFpTa0d0QT09', 'Tuesday', 'Воеводин Владимир Валентинович'),
  createData('16:20 17:55', 356, 'https://www.youtube.com/playlist?list=PLOaW8o20mEgi_9DKM3zURWlvd7BF7MIXp', 'Tuesday', 'Марченков Сергей Серафимович, Ложкин Сергей Андреевич'),
  createData('', 356, '', 'Tuesday', ''),
  createData('08:45 10:20', 356, 'https://mipt.ru/dcam/students/study/matmodeli/', 'Wednesday', 'Шананин Александр Алексеевич'),
  createData('10:30 12:05', 356, '', 'Wednesday', 'Белянкина'),
  createData('12:15 13:50', 356, '', 'Wednesday', 'Саратовская Лариса Борисовна'),
  createData('14:35 16:10', 356, 'everywhere', 'Wednesday', ''),
  createData('16:20 17:55', 356, '', 'Wednesday', ''),
  createData('', 356, '', 'Wednesday', ''),
  createData('08:45 10:20', 356, '', 'Thursday', ''),
  createData('10:30 12:05', 356, '', 'Thursday', ''),
  createData('12:50 14:25', 356, '', 'Thursday', ''),
  createData('14:35 16:10', 356, '', 'Thursday', ''),
  createData('16:20 17:55', 356, '', 'Thursday', ''),
  createData('', 356, '', 'Thursday', ''),
  createData('08:45 10:20', 356, '', 'Friday', ''),
  createData('10:30 12:05', 356, '', 'Friday', ''),
  createData('12:50 14:25', 356, '', 'Friday', ''),
  createData('14:35 16:10', 356, '', 'Friday', ''),
  createData('16:20 17:55', 356, 'https://zoom.us/j/7126616565', 'Friday', 'Белолипецкий Александр Алексеевич'),
  createData('', 356, '', 'Friday', ''),
  createData('08:45 10:20', 356, '', 'Saturday', ''),
  createData('10:30 12:05', 356, '', 'Saturday', ''),
  createData('12:15 13:50', 356, '', 'Saturday', ''),
  createData('14:35 16:10', 356, '', 'Saturday', ''),
  createData('16:20 17:55', 356, '', 'Saturday', ''),
  createData('', 356, '', 'Saturday', ''),
];

const passwords = {

  'https://zoom.us/j/82541244193': 785387,
  'https://zoom.us/j/7126616565': 440883,
}

export default function SimpleTable() {
  const classes = useStyles();

  const [lessons, setLessons] = useState(
    {
    	Monday : { 0 : 'Базы данных', 1 : 'ДГДМ сем', 2 : 'ДГДМ лек', 3: 'ТИГР лек', 4 : 'ТИГР лек', 5: 'ТИГР консультация' },
      Tuesday : { 0 : 'ТР', 1 : 'Ньют. мет.', 2: 'ТР', 3 : 'СкиПОД', 4: 'ДГДМ лек' },
      Wednesday : { 0 : 'Мат. мод. в экономике', 1 : 'Прак', 2 : 'Линг. культ. лек', 3: '', 4 : '' },
      Thursday : { 0 : 'ВП', 1 : 'ВП', 2 : 'ВП', 3: '', 4 : '' },
      Friday : { 0 : '', 1 : '', 2 : '', 3: '', 4 : 'Акт. мат.' },
      Saturday : { 0 : '', 1 : '', 2 : '', 3: '', 4 : '' },
    }
  );

  function handleChange(event) {
    // setLessons(event.target.value);
    console.log('input event log : ', event.target.name);
  }

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
        </TableHead>
        <TableBody>
          {console.log('rows', rows)}
          {rows.map( (row, i) => (
            <>
              { i%6 === 0 &&
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="center" className="table-day">{row.day}</TableCell>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              }
              <TableRow key={row.time} className={classes.tableRow}>
                <TableCell component="th" scope="row">
                  {row.time}
                </TableCell>
                <TableCell align="center">
                  <input type="text" value={lessons[row.day][i % 6]} onChange={handleChange} size="40" name={row.time} />
                  {
                  false && row.day  === 'Monday' && <input type="text" value={'ТИГР консультация'} onChange={handleChange} size="40" name={row.time} />
                  }
                </TableCell>
                <TableCell align="center" className="link">
                  <a href={row.link}>{row.link.includes('youtube') ? 'youtube' : row.link.includes('7126616565') ? 'zoom password: 440883' : row.link.includes('82541244193') ? 'zoom password: 785387' : row.link === '' ? '' : 'zoom link'}</a>
                </TableCell>
                {
                  row.name &&
                  <Tooltip title="" placement="top">
                    <TableCell align="center">{row.name}</TableCell>
                  </Tooltip>
                }
                <TableCell align="center"></TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
