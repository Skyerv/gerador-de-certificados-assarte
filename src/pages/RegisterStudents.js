import React from 'react';
import Nav from '../components/Nav';
import CustomButton from '../components/CustomButton';
import { Link } from 'react-router-dom';
import '../styles/RegisterStudents.css';
import '../components/StudentTile.css';
import StudentTile from '../components/StudentTile';

function RegisterStudents() {
	return (
		<div className="register-students">
			<Nav />
			<div className="register-students-container">
				<div className="register-students-form">
					<h2>Cadastro de Alunos</h2>
					<form>
						<div className="form-group add-student-form">
							<span>Nome do aluno:</span>
							<input type="text" placeholder="Nome do aluno" />
							<button className='register-student-button'>Adicionar</button>
						</div>
						<div className="form-group search-student-form">
							<input type="text" placeholder="Pesquisar aluno" />
							<button className='register-student-button'>Buscar</button>
						</div>
					</form>
				</div>
				<StudentTile name='Rodrigo Edinael Silveira' />
				<StudentTile name='Rodrigo Edinael Silveira' />
				<StudentTile name='Rodrigo Edinael Silveira' />
				<StudentTile name='Rodrigo Edinael Silveira' />
				<StudentTile name='Rodrigo Edinael Silveira' />
				<StudentTile name='Rodrigo Edinael Silveira' />
				<StudentTile name='Rodrigo Edinael Silveira' />
			</div>
		</div>
	);
}

export default RegisterStudents;