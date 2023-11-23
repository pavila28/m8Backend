const getTareas = (req, res) => {
    res.status(200).json({ message: 'Obtener tareas' })
}

const setTareas = (req, res) => {
    res.status(201).json({ message: 'Crear tareas' })
}

const updateTareas = (req, res) => {
    res.status(200).json({ message: `Modificar la tarea numero ${req.params.id}` })
}

const deleteTareas = (req, res) => {
    res.status(200).json({ message: `Eliminar la tarea numero ${req.params.id}` })
}

module.exports = {
    getTareas,
    setTareas,
    updateTareas,
    deleteTareas
}