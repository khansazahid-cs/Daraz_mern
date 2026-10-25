// Reusable CRUD handlers for the existing Mongoose models.
export const crudController = (Model) => ({
    create: async (req, res) => {
        try {
            const data = await Model.create(req.body);
            return res.status(201).json({ message: "Data created successfully", data });
        } catch (error) {
            console.error(error);
            return res.status(400).json({ message: "Could not create data", error: error.message });
        }
    },
    getAll: async (req, res) => {
        try {
            const data = await Model.find().sort({ createdAt: -1 });
            return res.status(200).json({ data });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Could not fetch data" });
        }
    },
    getOne: async (req, res) => {
        try {
            const data = await Model.findById(req.params.id);
            if (!data) return res.status(404).json({ message: "Data not found" });
            return res.status(200).json({ data });
        } catch (error) {
            return res.status(400).json({ message: "Invalid ID" });
        }
    },
    update: async (req, res) => {
        try {
            const data = await Model.findByIdAndUpdate(req.params.id, req.body, {
                new: true, runValidators: true
            });
            if (!data) return res.status(404).json({ message: "Data not found" });
            return res.status(200).json({ message: "Data updated successfully", data });
        } catch (error) {
            console.error(error);
            return res.status(400).json({ message: "Could not update data", error: error.message });
        }
    },
    remove: async (req, res) => {
        try {
            const data = await Model.findByIdAndDelete(req.params.id);
            if (!data) return res.status(404).json({ message: "Data not found" });
            return res.status(200).json({ message: "Data deleted successfully" });
        } catch (error) {
            return res.status(400).json({ message: "Invalid ID" });
        }
    }
});
