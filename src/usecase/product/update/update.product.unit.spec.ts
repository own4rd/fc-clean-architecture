import ProductFactory from "../../../domain/product/factory/product.factory";
import { UpdateProductUseCase } from "./update.product.usecase";

const product = ProductFactory.create(
    "Old Product",
    50,
);

const input = {
    id: product.id,
    name: 'Product',
    price: 100,
}

const MockRepository = () => {
    return {
        find: jest.fn().mockReturnValue(Promise.resolve(product)),
        findAll: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
    };
};

describe('Unit test update product UseCase', () => {
    it('should update a product', async () => {
        const productRepository = MockRepository();
        const updateProductUseCase = new UpdateProductUseCase(productRepository);

        const output = await updateProductUseCase.execute(input);

        expect(output).toEqual(input);
    });
});