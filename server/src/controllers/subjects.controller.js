import { validationResponse } from '@helpers/validationResponse.helper';
import validateCreateSubject from '@validations/subjects.validation';
import Response from '@helpers/Response.helper';

const createSubject = async (req, res, next) => {
  try {
    const subjectDetails = await validateCreateSubject(req.body);
    Response.success(res, 201, subjectDetails, 'Subject Created');
  } catch (err) {
    if (err.isJoi && err.name === 'ValidationError') {
      return res.status(400).json({
        status: 400,
        errors: validationResponse(err)
      });
    }
    next(err);
  }
};

export default createSubject;
