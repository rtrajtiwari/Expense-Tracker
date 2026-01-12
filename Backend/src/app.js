const express =  required("express");
const cors = required("cors");

const authRoutes = required("./routes/auth.routes");
const expenseRoutes = required("./routes/expense.routes");
const analyticsRoutes = required("./routes/analytics.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth",authRoutes);
app.use("/api/expense",expenseRoutes);
app.use("/api/analytics",analyticsRoutes);

module.exports = app;

