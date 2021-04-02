import React, { useEffect, useState, useCallback } from 'react';
import { Loader } from '../components/Loader';
import { AddCaloriesList } from '../components/AddCaloriesList';
import { getItems, postProducts, postTraining } from '../services/httpService';
import { productsData, trainingData, paths } from '../enum';

export const AddCaloriesPage = ({ token }) => {
  const [ products, setProducts ] = useState([]);
  const [ training, setTraining ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  const getCategories = useCallback(async () => {
    const { data } = await getItems(paths.Categories, token);

    setLoading(false)
    setProducts(data.products);
    setTraining(data.training);
  }, [token]);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {!loading && (
        <form className="row">
          <AddCaloriesList items={products} text={productsData} token={token} postItems={postProducts} />
          <AddCaloriesList items={training} text={trainingData} token={token} postItems={postTraining} />
        </form>
      )}
    </>
  );
};
