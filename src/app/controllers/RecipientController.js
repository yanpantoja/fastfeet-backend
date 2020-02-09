import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const {
      id,
      name,
      street,
      number,
      state,
      city,
      cep,
    } = await Recipient.create(req.body);

    return res.json({
      id,
      name,
      street,
      number,
      state,
      city,
      cep,
    });
  }
}

export default new RecipientController();
