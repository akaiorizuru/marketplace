
import React, {Components} from 'react'
import {withArticle} from "../../components/Panier/Article/";
import {Button, Empty, Table} from 'antd'
import Text from "antd/es/typography/Text";
import emptyCart  from 'img/empty-cart.svg';
import QuantityCounter from "../QuantityCounter/QuantityCounter";
import DeleteButton from "../DeleteButton/DeleteButton";

class Article extends Components {

    const cols = [
        {
            title: "Nom de l'article",
            dataIndex: 'name',
        },
        {
            title: "Prix Unitaire",
            dataIndex: 'price',
            render: price => <Text>{price} €</Text>
        },
        {
            title: "Quantité",
            dataIndex: 'qty',
            key: 'qty',
            render: (qty, item) => qty ? (
                    <QuantityCounter min={1} value={ item.qty } onPlus={() => {props.cart.increaseQty(item.id)}} onMinus={() => {props.cart.decreaseQty(item.id)}} />
            ) : ''
        },
        {
            // title: "Prix Unitaire",
            dataIndex: 'action',
            render: (show, item) => show === false ? '' : (<DeleteButton plural={item.qty > 1} onConfirm={() => { props.cart.remove(item.id) }} />)
        },
    ]
    const cartData = props.cart.length() ? [
        ...props.cart.get(),
        {
            key: 'total',
            id: 0,
            action: false,
            name: <Text style={{ fontWeight: 'bold' }}>Total</Text>,
            price: <Text style={{ fontWeight: 'bold' }}>{props.cart.totalPrice()}</Text>
        }
    ] :  props.cart.get()
    return (
        <div>
            <h1>Mon Panier</h1>
            <Table columns={cols} dataSource={ cartData } locale={{	emptyText: (<Empty image={emptyCart} description="Votre panier est vide." />) }} />
        </div>
    )
}

export default withCart(Cart)