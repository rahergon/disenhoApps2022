import { useState } from "react";
import { v4 as uuid } from 'uuid';

function Cartas() {
	const initialState = {
		'id': 0,
		'nombre':'Raúl Herrera González',
		'direccion': '5 de febrero 100 pte col centro',
		'telefono': '6181232323',
	};
	const [datos, useDatos] = useState([initialState]);
	const HandleSubmit = (e) => {
		//console.log(e.target.nombre.value);
		e.preventDefault();
		const initialState2 = {
			'id': uuid(),
			'nombre':e.target.nombre.value,
			'direccion': e.target.direccion.value,
			'telefono': e.target.telefono.value,
		};

		useDatos(()=>{
			let datos1 = [...datos, initialState2];
			return (datos1);
		});
		
	}
	return ( 
		<>
			<div className="container text-center mt-3">
			<div className="row row-cols-3">
				{
					datos.map(dato=>(
						<div className="col mt-3" key={ dato.id }>
							<div className="card" style={{
								"width": "18rem",
							}}>
								<div className="card-body">
									<h5 className="card-title">{ dato.nombre }</h5>
									<p className="card-text">Id: { dato.id }</p>
									<p className="card-text">Dirección: { dato.direccion }</p>
									<p className="card-text">Telefono: { dato.telefono }</p>
									<button id={ dato.id } className="btn btn-danger">Eliminar</button>
								</div>
							</div>
						</div>
					))
				}
			</div>
			</div>

			<div className="container mt-3">
				<form onSubmit={ HandleSubmit }>
				<div className="mb-3">
					<label htmlFor="nombre" className="form-label">Nombre</label>
					<input type="text" className="form-control" id="nombre" aria-describedby="nombreHelp" />
					<div id="nombreHelp" className="form-text">We'll never share your name with anyone else.</div>
				</div>
				<div className="mb-3">
					<label htmlFor="direccion" className="form-label">Dirección</label>
					<input type="text" className="form-control" id="direccion" aria-describedby="direccionHelp" />
					<div id="direccionHelp" className="form-text">We'll never share your direccion with anyone else.</div>
				</div>
				<div className="mb-3">
					<label htmlFor="telefono" className="form-label">Telefono</label>
					<input type="text" className="form-control" id="telefono" aria-describedby="telefonoHelp" />
					<div id="telefonoHelp" className="form-text">We'll never share your telefono with anyone else.</div>
				</div>
				<button type="submit" className="btn btn-primary">Guardar</button>
			</form>
			</div>

			




		
		</>
	 );
}

export default Cartas;