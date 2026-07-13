public class E_commerce {

    static class Product {
        int productId;
        String productName;
        String category;

        Product(int productId, String productName, String category) {
            this.productId = productId;
            this.productName = productName;
            this.category = category;
        }

        void display() {
            System.out.println(productId + " " + productName + " " + category);
        }
    }

    public static Product linearSearch(Product[] products, int id) {
        for (Product product : products) {
            if (product.productId == id) {
                return product;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, int id) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;

            if (products[mid].productId == id)
                return products[mid];
            else if (products[mid].productId < id)
                left = mid + 1;
            else
                right = mid - 1;
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Mobile", "Electronics"),
            new Product(103, "Shoes", "Fashion"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Bag", "Fashion")
        };

        System.out.println("Linear Search:");
        Product p1 = linearSearch(products, 104);

        if (p1 != null)
            p1.display();
        else
            System.out.println("Product not found");

        System.out.println();

        System.out.println("Binary Search:");
        Product p2 = binarySearch(products, 104);

        if (p2 != null)
            p2.display();
        else
            System.out.println("Product not found");
    }
}