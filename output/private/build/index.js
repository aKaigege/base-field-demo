"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const block_basekit_server_api_1 = require("@lark-opdev/block-basekit-server-api");
const { t } = block_basekit_server_api_1.field;
block_basekit_server_api_1.basekit.addField({
    formItems: [
        {
            key: 'url',
            label: '请输入需要转附件的URL',
            component: block_basekit_server_api_1.FieldComponent.FieldSelect,
            props: {
                supportType: [block_basekit_server_api_1.FieldType.Text]
            },
            validator: {
                required: true,
            }
        },
    ],
    resultType: {
        type: block_basekit_server_api_1.FieldType.Attachment,
    },
    // formItemParams 为运行时传入的字段参数，对应字段配置里的 formItems （如引用的依赖字段）
    execute: async (formItemParams, context) => {
        /** 为方便查看日志，使用此方法替代console.log */
        function debugLog(arg) {
            console.log(JSON.stringify({
                formItemParams,
                context,
                arg
            }));
        }
        const { url } = formItemParams;
        if (Array.isArray(url)) {
            return {
                code: block_basekit_server_api_1.FieldCode.Success, // 0 表示请求成功
                // data 类型需与下方 resultType 定义一致
                data: (url.map(({ link }, index) => {
                    if (!link) {
                        return undefined;
                    }
                    const name = link.split('/').slice(-1)[0];
                    return {
                        name: '随机名字' + index + name,
                        content: link,
                        contentType: "attachment/url"
                    };
                })).filter((v) => v)
            };
        }
        debugLog('非数组');
        return {
            code: block_basekit_server_api_1.FieldCode.Error,
        };
    },
});
exports.default = block_basekit_server_api_1.basekit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtRkFBZ0o7QUFDaEosTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLGdDQUFLLENBQUM7QUFFcEIsa0NBQU8sQ0FBQyxRQUFRLENBQUM7SUFDZixTQUFTLEVBQUU7UUFDVDtZQUNFLEdBQUcsRUFBRSxLQUFLO1lBQ1YsS0FBSyxFQUFFLGNBQWM7WUFDckIsU0FBUyxFQUFFLHlDQUFjLENBQUMsV0FBVztZQUNyQyxLQUFLLEVBQUU7Z0JBQ0wsV0FBVyxFQUFFLENBQUMsb0NBQVMsQ0FBQyxJQUFJLENBQUM7YUFDOUI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsUUFBUSxFQUFFLElBQUk7YUFDZjtTQUNGO0tBQ0Y7SUFDRCxVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUUsb0NBQVMsQ0FBQyxVQUFVO0tBQzNCO0lBQ0QsMkRBQTJEO0lBQzNELE9BQU8sRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxFQUFFO1FBQ3pDLGlDQUFpQztRQUNqQyxTQUFTLFFBQVEsQ0FBQyxHQUFRO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDekIsY0FBYztnQkFDZCxPQUFPO2dCQUNQLEdBQUc7YUFDSixDQUFDLENBQUMsQ0FBQTtRQUNMLENBQUM7UUFDRCxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsY0FBYyxDQUFDO1FBQy9CLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3ZCLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLG9DQUFTLENBQUMsT0FBTyxFQUFFLFdBQVc7Z0JBQ3BDLDhCQUE4QjtnQkFDOUIsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUU7b0JBQ2pDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDVixPQUFPLFNBQVMsQ0FBQTtvQkFDbEIsQ0FBQztvQkFDRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMxQyxPQUFPO3dCQUNMLElBQUksRUFBRSxNQUFNLEdBQUcsS0FBSyxHQUFHLElBQUk7d0JBQzNCLE9BQU8sRUFBRSxJQUFJO3dCQUNiLFdBQVcsRUFBRSxnQkFBZ0I7cUJBQzlCLENBQUE7Z0JBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNyQixDQUFDO1FBQ0osQ0FBQztRQUNELFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQixPQUFPO1lBQ0wsSUFBSSxFQUFFLG9DQUFTLENBQUMsS0FBSztTQUN0QixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQztBQUNILGtCQUFlLGtDQUFPLENBQUMifQ==