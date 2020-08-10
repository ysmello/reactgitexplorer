import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Gihub Explorer" />
      <Title>Explore repositorios no Github</Title>

      <Form>
        <input type="text" placeholder="Digite aqui" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/37252216?s=460&u=dab02a86ecd73b4faa2fc6704a7a1d4fcf71c1ab&v=4"
            alt="Yuri Mello"
          />
          <div>
            <strong>wmnsk/go-gtp</strong>
            <p>GTP(GPRS Tunneling Protocol) implemented in pure Golang.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/37252216?s=460&u=dab02a86ecd73b4faa2fc6704a7a1d4fcf71c1ab&v=4"
            alt="Yuri Mello"
          />
          <div>
            <strong>wmnsk/go-gtp</strong>
            <p>GTP(GPRS Tunneling Protocol) implemented in pure Golang.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/37252216?s=460&u=dab02a86ecd73b4faa2fc6704a7a1d4fcf71c1ab&v=4"
            alt="Yuri Mello"
          />
          <div>
            <strong>wmnsk/go-gtp</strong>
            <p>GTP(GPRS Tunneling Protocol) implemented in pure Golang.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};
export default Dashboard;
