import Point from "../models/points.js";

export const pointsController = async (req, res) => {
  const pointsData = req.body;
  console.log(pointsData);
  //   const addPoints = new Point(pointsData);
  const pointExist = await Point.findOne({ Viewer });
  if (pointExist) {
    const updatedPoints = await points.findByIdAndUpdate(Viewer, {
      $set: {
        points: points + 5,
      },
    });
  }
  try {
    await addPoints.save();
    res.status(200).json("you get 5 points..Keep watching");
  } catch (error) {
    console.log(error);
    res.status(400).json("error in adding points");
  }
};

export const getpoints = async (req, res, next) => {
  try {
    const points = await points.find();
    res.status(200).send(points);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deletepoints = async (req, res) => {
  const { videoId: videoId, Viewer: Viewer } = req.params;
  // console.log(_id)
  try {
    await points.findOneAndDelete({ videoId: videoId, Viewer: Viewer });
    res
      .status(200)
      .json({ message: "Removed From Your points Successfully  ..." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
