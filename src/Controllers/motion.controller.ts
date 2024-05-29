import { Request, Response } from "express";
import prisma from "../db/prisma.db";
import HttpInterface from "./http.interface";
import { parse } from "path";


class MotionHttpController extends HttpInterface {

    async post(req: Request, res: Response): Promise<void> {
        const newMotion = await prisma.motion.create({
            data: { status: parseInt(req.params.str) }
        });
        res.status(201).json({ message: 'Motion created', newMotion })
    }

    async get(req: Request, res: Response) {
        const allMotions = await prisma.motion.findMany()
        res.status(200).json(allMotions);
    }

    async getUltimate(req: Request, res: Response) {
        const allMotions = await prisma.motion.findFirst({
            orderBy: {
                id: 'desc'
            }
        })
        res.status(200).json(allMotions);
    }


    async put(req: Request, res: Response) {
        const updatedMotion = await prisma.motion.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: req.body
        });
        res.status(200).json({ message: 'Motion updated', id: updatedMotion })
    }

    async delete(req: Request, res: Response) {
        const deleteMotion = await prisma.motion.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
        res.status(200).json({ message: 'Motion deleted', id: deleteMotion })
    }

}


export default MotionHttpController;