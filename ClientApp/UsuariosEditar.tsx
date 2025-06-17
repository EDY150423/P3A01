import { useState } from "react";

interface UsuariosEditarProps {
    id?: string
}

const UsuariosEditar = ({ id }: UsuariosEditarProps) => {
    const [idUsuario, setIdUsuario] = useState(id);
    return (
        <>
            <div className="container">
                <h1>Editar Usuario</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="mb-3">
                            <label>Nombre</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mb-3">
                            <label>Correo Electronico</label>
                            <input type="email" className="form-control" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mb-3">
                            <label>Contraseña</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary">Guardar</button>
                        <a href=" /usuarios" className="btn btn-secondary">Regresar</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UsuariosEditar;