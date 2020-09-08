import React from 'react';
import MaterialTable from 'material-table';
import { useHistory } from "react-router-dom";
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

export default function MaterialTableDemo() {
  let history = useHistory();
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Email', field: 'email', render: rowData => <a href={'mailto:' + rowData.email} target='_blank'>{rowData.email}</a> },
      { title: 'Istina', field: 'istina', render: rowData => <a href={rowData.istina} target='_blank'>{rowData.istina ? 'istina' : 'not found'}</a> },
      {
        title: 'tg channel',
        field: 'tg',
        render: rowData => <a href={rowData.tg} target='_blank'>{rowData.tg ? 'telegram' : ''}</a>
      },
    ],
    data: [
      { name: 'Морозов Владимир Викторович', email: 'vmorosov@mail.ru', istina: 'https://istina.msu.ru/profile/VladMorozov/' },
      { name: 'Воеводин Владимир Валентинович', email: 'https://parallel.ru/vmk20', istina: 'https://istina.msu.ru/profile/voevodin@parallel.ru/' },
      { name: 'Тарлапан Олег Анатольевич', email: 'tarlapan@gse.cs.msu.ru', istina: 'https://istina.msu.ru/profile/olegt/', tg: 'https://t.me/joinchat/AAAAAEiT7ZjlqJtXd0yWpQ' },
      { name: 'Марченков Сергей Серафимович, Ложкин Сергей Андреевич', email: 'ssmarchen@yandex.ru', istina: 'https://istina.msu.ru/profile/MarchenkovSS/' },
      { name: 'Шананин Александр Алексеевич', email: 'alexshan@yandex.ru', istina: 'https://istina.msu.ru/profile/alexshan/' },
      { name: 'Саратовская Лариса Борисовна', email: 'not found', istina: 'https://istina.msu.ru/profile/SaratovskayaLB/' },
      { name: 'Поспелова Ирина Игоревна', email: 'ipospelova05@yandex.ru', istina: 'https://istina.msu.ru/profile/ipospelova/' },
      { name: 'Простов Василий Андреевич', email: 'prostovvasily@gmail.com', istina: 'https://istina.msu.ru/profile/ProstovVA/', tg: 'https://t.me/joinchat/Gtyn0BhVu6SLY9VydEec2w' },
      { name: 'Алексей Феридович Измаилов', email: 'izmaf@cs.msu.ru' },
      { name: 'Денисов Дмитрий Витальевич', email: 'dvden@bk.ru', istina: 'https://istina.msu.ru/profile/Dmitriy53/' },
      { name: 'IO Prak, Полушкин Андрей Алексеевич', email: 'polushkinandrew@yandex.ru', istina: 'https://istina.msu.ru/profile/polushkinandrew@yandex.ru/' },
      { name: 'Белолипецкий Александр Алексеевич', email: 'belolip4609@yandex.ru', istina: 'https://istina.msu.ru/profile/starobis14/' },
    ],
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className='contacts' onClick={() => history.push('/io-timetable')} style={{left: '2.4%', right: 'unset'}}>
          back
        </div>
        <MaterialTable
          icons={tableIcons}
          title="Pedagogues"
          columns={state.columns}
          data={state.data}
          style={{width: '95%', marginTop: '8%', marginBottom: '5%'}}
        />
      </header>
    </div>
  );
}
