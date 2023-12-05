const { query } = require('../services/db.service');

const getPlan = async (req, res) => {
  try {
    const { timestamp } = req.params;
    const [, rows] = await query(
      `SELECT * FROM plan WHERE user_id = ? AND UNIX_TIMESTAMP(date) = ?
      JOIN food_plan ON (food_plan.plan_id = plan.id)
      JOIN recipe_plan ON (recipe_plan.plan_id = plan.id)
      JOIN activity_plan ON (activity_plan.plan_id = plan.id)
      JOIN activity_plan ON (activity_plan.plan_id = plan.id)`,
    );
  } catch (e) {
    console.error(e);
    return res.status(500).json({ status: 'error', data: null, message: 'server error' });
  }
};
