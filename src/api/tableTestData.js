import request from '@/utils/request'

export function getTableTestData() {
    return request({
      url: '/table/tabletestdata',
      method: 'get'
    })
  }

export function getMockData() {
    // debugger
    return {
        tableData: [{
            name: '数据1',
            xzq: '保山市',
            type: '测绘',
            format: '数据格式',
            date: '2016-05-02',
            size: 100,
            version: '1.0',
            copy: '2',
            status: '草案',
            address: '保存单位1',
            server: '服务地址',
            download: '下载地址',
            person: '保存人员',
            phone: 'XXX-XXXXXXXX',
            note: '备注1',
        },
        {
            name: '数据1',
            xzq: '楚雄市',
            type: '测绘',
            format: '数据格式',
            date: '2016-05-02',
            size: 100,
            version: '1.0',
            copy: '2',
            status: '过期',
            address: '保存单位1',
            server: '服务地址',
            download: '下载地址',
            person: '保存人员',
            phone: 'XXX-XXXXXXXX',
            note: '备注1',
        },
        {
            name: '数据1',
            xzq: '大理市',
            type: '测绘',
            format: '数据格式',
            date: '2016-05-02',
            size: 100,
            version: '1.0',
            copy: '2',
            status: '有效',
            address: '保存单位1',
            server: '服务地址',
            download: '下载地址',
            person: '保存人员',
            phone: 'XXX-XXXXXXXX',
            note: '备注1',
        },
        {
            name: '数据1',
            xzq: '德宏州',
            type: '测绘',
            format: '数据格式',
            date: '2016-05-02',
            size: 100,
            version: '1.0',
            copy: '2',
            status: '有效',
            address: '保存单位1',
            server: '服务地址',
            download: '下载地址',
            person: '保存人员',
            phone: 'XXX-XXXXXXXX',
            note: '备注1',
        },
        {
            name: '数据1',
            xzq: '迪庆州',
            type: '测绘',
            format: '数据格式',
            date: '2016-05-02',
            size: 100,
            version: '1.0',
            copy: '2',
            status: '有效',
            address: '保存单位1',
            server: '服务地址',
            download: '下载地址',
            person: '保存人员',
            phone: 'XXX-XXXXXXXX',
            note: '备注1',
        },
        {
            name: '数据1',
            xzq: '昆明市',
            type: '测绘',
            format: '数据格式',
            date: '2016-05-02',
            size: 100,
            version: '1.0',
            copy: '2',
            status: '有效',
            address: '保存单位1',
            server: '服务地址',
            download: '下载地址',
            person: '保存人员',
            phone: 'XXX-XXXXXXXX',
            note: '备注1',
        },
        {
            name: '数据1',
            xzq: '丽江市',
            type: '测绘',
            format: '数据格式',
            date: '2016-05-02',
            size: 100,
            version: '1.0',
            copy: '2',
            status: '有效',
            address: '保存单位1',
            server: '服务地址',
            download: '下载地址',
            person: '保存人员',
            phone: 'XXX-XXXXXXXX',
            note: '备注1',
        },
        {
            name: '数据1',
            xzq: '临沧市',
            type: '测绘',
            format: '数据格式',
            date: '2016-05-02',
            size: 100,
            version: '1.0',
            copy: '2',
            status: '有效',
            address: '保存单位1',
            server: '服务地址',
            download: '下载地址',
            person: '保存人员',
            phone: 'XXX-XXXXXXXX',
            note: '备注1',
        },
        {
            name: '数据1',
            xzq: '怒江州',
            type: '测绘',
            format: '数据格式',
            date: '2016-05-02',
            size: 100,
            version: '1.0',
            copy: '2',
            status: '有效',
            address: '保存单位1',
            server: '服务地址',
            download: '下载地址',
            person: '保存人员',
            phone: 'XXX-XXXXXXXX',
            note: '备注1',
        },
        {
            name: '数据1',
            xzq: '普洱市',
            type: '测绘',
            format: '数据格式',
            date: '2016-05-02',
            size: 100,
            version: '1.0',
            copy: '2',
            status: '有效',
            address: '保存单位1',
            server: '服务地址',
            download: '下载地址',
            person: '保存人员',
            phone: 'XXX-XXXXXXXX',
            note: '备注1',
        },
        {
            name: '数据1',
            xzq: '曲靖市',
            type: '测绘',
            format: '数据格式',
            date: '2016-05-02',
            size: 100,
            version: '1.0',
            copy: '2',
            status: '有效',
            address: '保存单位1',
            server: '服务地址',
            download: '下载地址',
            person: '保存人员',
            phone: 'XXX-XXXXXXXX',
            note: '备注1',
        },
        {
            name: '数据1',
            xzq: '文山州',
            type: '测绘',
            format: '数据格式',
            date: '2016-05-02',
            size: 100,
            version: '1.0',
            copy: '2',
            status: '有效',
            address: '保存单位1',
            server: '服务地址',
            download: '下载地址',
            person: '保存人员',
            phone: 'XXX-XXXXXXXX',
            note: '备注1',
        },
        {
            name: '数据1',
            xzq: '西双版纳',
            type: '测绘',
            format: '数据格式',
            date: '2016-05-02',
            size: 100,
            version: '1.0',
            copy: '2',
            status: '有效',
            address: '保存单位1',
            server: '服务地址',
            download: '下载地址',
            person: '保存人员',
            phone: 'XXX-XXXXXXXX',
            note: '备注1',
        },
        {
            name: '数据1',
            xzq: '玉溪市',
            type: '测绘',
            format: '数据格式',
            date: '2016-05-02',
            size: 100,
            version: '1.0',
            copy: '2',
            status: '有效',
            address: '保存单位1',
            server: '服务地址',
            download: '下载地址',
            person: '保存人员',
            phone: 'XXX-XXXXXXXX',
            note: '备注1',
        },
    ]
    }
}