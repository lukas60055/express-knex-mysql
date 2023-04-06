import { Response, Request, NextFunction } from 'express';
import knex from '../config/database';

const tableName: string = 'websites';

export const getWebsites = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await knex.from(tableName).then((websites) => {
      websites.length ? res.send(websites) : res.send('Websites list empty');
    });
  } catch (error) {
    res.status(500).send('Server Error');
    next(error);
  }
};

export const addWebsites = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.body.url && req.body.description) {
      await knex
        .from(tableName)
        .insert({
          url: req.body.url,
          description: req.body.description,
          date: req.body.date || knex.fn.now(),
        })
        .then(() => {
          res.send(`Page added: ${req.body.url}`);
        });
    } else {
      res
        .status(400)
        .send('Required JSON object with given "url" "description"');
    }
  } catch (error) {
    res.status(500).send('Server Error');
    next(error);
  }
};

export const updateWebsites = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (
      req.body.id &&
      (req.body.url || req.body.description || req.body.date)
    ) {
      await knex
        .from(tableName)
        .where('id', req.body.id)
        .update({
          url: req.body.url,
          description: req.body.description,
          date: req.body.date,
        })
        .then((status) => {
          status
            ? res.send(`Updated row with ID: ${req.body.id}`)
            : res.send('No row with this ID found');
        });
    } else {
      res
        .status(400)
        .send(
          'Required JSON object with given "id" and one of "url", "description" or "date"'
        );
    }
  } catch (error) {
    res.status(500).send('Server Error');
    next(error);
  }
};

export const deleteWebsites = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.body.id) {
      await knex
        .from(tableName)
        .where('id', req.body.id)
        .del()
        .then((status) => {
          status
            ? res.send(`Deleted row with ID: ${req.body.id}`)
            : res.send('No row with this ID found');
        });
    } else {
      res.status(400).send('Required JSON object with given "id"');
    }
  } catch (error) {
    res.status(500).send('Server Error');
    next(error);
  }
};
