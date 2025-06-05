using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

[Route("presentacion")]
public class MiProyectoController : ControllerBase

{
    [HttpGet("proyecto")]
    public IActionResult ObtenerProyecto()
    {
        var proyecto = new
        
        {
            escuela = "Cbtis105",
            carrera = "Programacion",
            grupo = "D",
            datos_semestre = "Cuarto semestre",
            proyecto = "Configuración de Proyecto y Backend",
            integrante1 = "Edgar Ramirez",
            integrante2 = "Abish Ariana",
            fecha = new DateTime(2025, 6, 5)
        };

        return Ok(proyecto);
    
}
}