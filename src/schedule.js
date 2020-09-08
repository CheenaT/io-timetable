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
    marginBottom: theme.spacing(5),
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
  createData('10:30 12:05', 'Урматы', 'https://us02web.zoom.us/j/85940749625?pwd=N05laWkwbXlrZWFHdnBYeGxFOTFpdz09', 'Monday','Простов Василий Андреевич'),
  createData('12:15 13:50', 262, 'https://m.cs.msu.ru/s/SzdHtfy8q67277g', 'Monday', 'Марченков Сергей Серафимович, Ложкин Сергей Андреевич'),
  createData('14:35 16:10', 305, 'https://www.youtube.com/playlist?list=PLOaW8o20mEgisfwS1kf2NNH0M-bc14Eil', 'Monday', 'Морозов Владимир Викторович'),
  createData('16:20 17:55', 356, 'https://www.youtube.com/playlist?list=PLOaW8o20mEgisfwS1kf2NNH0M-bc14Eil', 'Monday', 'Морозов Владимир Викторович'),
  createData('18:00', 'ТИГР консультация', 'https://us04web.zoom.us/j/5267094600?pwd=NkQrN21ab2RnZ1VxY1c4eXhjcmNGUT09', 'Monday', 'Морозов Владимир Викторович'),
  createData('08:45 10:20', 356, 'https://us02web.zoom.us/j/82541244193?pwd=S1Q5T3hlS1J4V2pacVdEOGo4Ui9Xdz09#success', 'Tuesday', 'Поспелова Ирина Игоревна'),
  createData('10:30 12:05', 356, 'https://us02web.zoom.us/j/82706731808?pwd=MDZXUWRlMHdtcmVDQTJDRmNNR2tzQT09', 'Tuesday', 'Алексей Феридович Измаилов'),
  createData('12:50 14:25', 356, 'https://us02web.zoom.us/j/84232001448?pw#success', 'Tuesday', 'Денисов Дмитрий Витальевич'),
  createData('14:35 16:10', 356, 'https://zoom.us/j/93898428359?pwd=MUR3QjByQURxWTNEWUtXY1RPd0pLUT09#success', 'Tuesday', 'Воеводин Владимир Валентинович'),
  createData('16:20 17:55', 356, 'https://m.cs.msu.ru/s/SzdHtfy8q67277g', 'Tuesday', 'Марченков Сергей Серафимович, Ложкин Сергей Андреевич'),
  createData('', 356, '', 'Tuesday', ''),
  createData('08:45 10:20', 356, 'https://mipt.ru/dcam/students/study/matmodeli/', 'Wednesday', 'Шананин Александр Алексеевич'),
  createData('10:30 12:05', 356, '', 'Wednesday', 'Белянкина'),
  createData('12:15 13:50', 356, 'https://us02web.zoom.us/j/85034127456?pwd=OE02QVBGZ216YVFaYjVzREVUKzVwZz09#success', 'Wednesday', 'Саратовская Лариса Борисовна'),
  createData('14:35 16:10', 356, '', 'Wednesday', ''),
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
      Wednesday : { 0 : 'Мат. мод. в экономике', 1 : 'Прак', 2 : 'Реферативное занятие с аспирантами', 3: '', 4 : '' },
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
                  {
                    {
                      'https://zoom.us/j/7126616565': <a target='_blank' href={row.link}>{'zoom password: 440883'}</a>,
                      'https://us02web.zoom.us/j/82541244193?pwd=S1Q5T3hlS1J4V2pacVdEOGo4Ui9Xdz09#success': <a target='_blank' href={row.link}>{'zoom password: 785387'}</a>,
                      'https://us02web.zoom.us/j/85940749625?pwd=N05laWkwbXlrZWFHdnBYeGxFOTFpdz09': <a target='_blank' href={row.link}>{'zoom password: 542779'}</a>,
                      'https://us02web.zoom.us/j/84232001448?pw#success': <a target='_blank' href={row.link}>{'zoom password: 664578'}</a>,
                      'https://zoom.us/j/93898428359?pwd=MUR3QjByQURxWTNEWUtXY1RPd0pLUT09#success': <a target='_blank' href={row.link}>{'zoom password: 214336'}</a>,
                      'https://us02web.zoom.us/j/85034127456?pwd=OE02QVBGZ216YVFaYjVzREVUKzVwZz09#success': <a target='_blank' href={row.link}>{'zoom password: 269439'}</a>,
                    }[row.link] || <a target='_blank' href={row.link}>{row.link.includes('youtube') ? 'youtube' : row.link.includes('mipt') ? 'mipt' : row.link.includes('m.cs.msu.ru') ? 'cmc media' : row.link === '' ? '' : 'zoom link'}</a>
                  }
                </TableCell>
                {
                  row.name &&
                  <Tooltip title="" placement="top">
                    <TableCell align="center">{row.name}</TableCell>
                  </Tooltip>
                }
                <TableCell align="center"></TableCell>
              </TableRow>
              {lessons[row.day][i % 6] === "ДГДМ сем" && 
              <TableRow key={row.time + "buhman"} className={classes.tableRow}>
                <TableCell component="th" scope="row">
                  {row.time}
                </TableCell>
                <TableCell align="center">
                  <input type="text" value={lessons[row.day][i % 6] + ', 411'} onChange={handleChange} size="40" name={row.time} />
                </TableCell>
                <TableCell align="center" className="link">
                  <a target='_blank' href={"https://us02web.zoom.us/j/88187181789?pwd=N1NhVVpqaWh4SzZlV2xvVWpsd3lpUT09#success"}>{'zoom password: 784254'}</a>
                </TableCell>
                <TableCell align="center">{"Бухман Антон Владимирович"}</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>}
            </>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
