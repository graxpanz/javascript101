// 3. Create a product item component
"use client";
import React from "react";
import { Card, CardBody, CardHeader, Typography, Button } from "@material-tailwind/react";

const GachaMachine = () => {

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column */}
          <div className="lg:w-2/3 xl:w-3/4 mt-4">
            {/* Product List */}
            <Card>
              <CardHeader shadow={false} floated={false}>
                <Typography variant="h4">Gacha Machine</Typography>
              </CardHeader>
              <CardBody>
                {/* Product Item */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <Card>
                    <CardBody className="text-center">
                      <Typography variant="h5" className="mb-2 truncate">
                        Product Name
                      </Typography>
                      <img
                        className="mx-auto w-full h-auto object-cover mb-2"
                        src="https://prod-thailand-res.popmart.com/default/20240709_105311_168194____1-the-monsters_____1200x1200.jpg"
                        alt="Product Name"
                      />
                      <Typography>Product description...</Typography>
                      <Typography variant="h4" color="red">
                        ฿550
                      </Typography>
                      <Button 
                        className="mt-2 text-xs" 
                        fullWidth 
                        color="green"
                      >
                        In Stock: 10
                      </Button>
                    </CardBody>
                  </Card>
                </div>

              </CardBody>
            </Card>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/3 xl:w-1/4 mt-4 lg:ml-4">
            {/* How to play */}
            <Card className="mb-4">
              <CardHeader shadow={false} floated={false}>
                <Typography variant="h4">How to play</Typography>
              </CardHeader>
              <CardBody>
                How to play content...
              </CardBody>
            </Card>

             {/* Add Credit */}
             <Card className="mb-4">
              <CardHeader shadow={false} floated={false}>
                <Typography variant="h4">Add Credit</Typography>
              </CardHeader>
              <CardBody>
                Add credit content...
              </CardBody>
            </Card>

            {/* Message */}
            <Card className="mb-4">
              <CardHeader shadow={false} floated={false}>
                <Typography variant="h4">Message</Typography>
              </CardHeader>
              <CardBody>
                Message content...
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GachaMachine;